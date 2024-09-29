const admin = require("../config/firebase");
const FCMJob = require("../models/fcm");
const { publishResultToRabbitMQ } = require("./publisherService"); // Import fungsi publish

const sendNotification = async (message) => {
  try {
    // Extract the necessary fields from the message object
    const { identifier, deviceId, text } = message;

    // Check if `deviceId` is provided
    if (!deviceId || deviceId.trim() === "") {
      throw new Error("Device token (deviceId) is missing or invalid");
    }

    console.log("Sending notification to Firebase...");

    // Create the notification payload
    const notificationPayload = {
      token: deviceId, // Make sure deviceId is used here
      notification: {
        title: "Incoming message",
        body: text,
      },
    };

    // Send notification via FCM
    const response = await admin.messaging().send(notificationPayload);

    if (response) {
      console.log(
        "Notification sent successfully. Saving status to the database..."
      );
      const deliverAt = new Date().toISOString();

      // Check if record already exists
      const existingJob = await FCMJob.findOne({ where: { identifier } });
      if (existingJob) {
        console.log(
          `Notification with identifier ${identifier} already exists in the database.`
        );
        return; // Prevent duplicate insertion
      }

      // Save to the `fcm_job` table
      const job = await FCMJob.create({ identifier, deliverAt });
      console.log("Notification data saved to the database:", job.toJSON());

      // Publish the result to RabbitMQ
      await publishResultToRabbitMQ({ identifier, deviceId, deliverAt });
    }
  } catch (error) {
    console.error(
      "Error sending notification or saving data to the database:",
      error
    );
  }
};

module.exports = { sendNotification };
