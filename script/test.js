const amqp = require("amqplib");
require("dotenv").config();

const sendTestMessage = async () => {
  try {
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();

    const queue = process.env.QUEUE_NAME || "notification.fcm";
    const random = Math.random().toString(36).substring(2);
    const message = JSON.stringify({
      identifier: `fcm-msg-${random}`,
      type: "device",
      deviceId: process.env.FIREBASE_FCM_TOKEN, // you need copy-paste this from https://fcm-generator.netlify.app/
      text: "This is example message - " + random,
    });

    await channel.assertQueue(queue, { durable: true });
    channel.sendToQueue(queue, Buffer.from(message));

    console.log(`Test message sent to ${queue}:`, message);
    setTimeout(() => {
      connection.close();
    }, 500);
  } catch (error) {
    console.error("Error sending test message:", error);
  }
};

sendTestMessage();
