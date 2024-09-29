const connectRabbitMQ = require("../config/rabbitmq");
const fcmService = require("./fcmService");

const consumeMessages = async () => {
  try {
    console.log("Connecting to RabbitMQ...");
    const { channel } = await connectRabbitMQ();
    console.log("Connected to RabbitMQ...");

    await channel.assertQueue(process.env.QUEUE_NAME, { durable: true });
    console.log(`Consuming messages from queue: ${process.env.QUEUE_NAME}`);

    const exchange = "notification.done";
    const routingKey = "notification.done.key";
    const queue = "notification.fcm";

    await channel.bindQueue(queue, exchange, routingKey);

    channel.prefetch(1);

    channel.consume(process.env.QUEUE_NAME, async (msg) => {
      if (msg !== null) {
        try {
          const messageContent = msg.content.toString();
          console.log("Received message:", messageContent);

          const message = JSON.parse(messageContent);
          console.log("Parsed message:", message);

          await fcmService.sendNotification(message);

          channel.ack(msg);
        } catch (processingError) {
          console.error("Error processing message:", processingError);
          channel.nack(msg, false, false);
        }
      }
    });
  } catch (error) {
    console.error("Error connecting to RabbitMQ:", error);
  }
};

module.exports = consumeMessages;
