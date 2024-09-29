const amqp = require("amqplib");
require("dotenv").config();

const publishResultToRabbitMQ = async (message) => {
  try {
    const connection = await amqp.connect(
      process.env.RABBITMQ_URL || "amqp://localhost"
    );
    const channel = await connection.createChannel();

    const exchange = process.env.TOPIC_NAME || "notification.done";
    const routingKey = "notification.done.key";

    await channel.assertExchange(exchange, "topic", { durable: true });

    const messageBuffer = Buffer.from(JSON.stringify(message));
    channel.publish(exchange, routingKey, messageBuffer);

    console.log(
      `Published result to exchange "${exchange}" with routing key "${routingKey}":`,
      message
    );

    setTimeout(() => {
      connection.close();
      console.log("Connection to RabbitMQ closed");
    }, 500);
  } catch (error) {
    console.error("Failed to publish message to RabbitMQ:", error);
  }
};

module.exports = { publishResultToRabbitMQ };
