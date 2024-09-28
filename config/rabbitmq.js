const amqp = require("amqplib");
require("dotenv").config();

const connectRabbitMQ = async () => {
  const connection = await amqp.connect(process.env.RABBITMQ_URL);
  const channel = await connection.createChannel();
  return { connection, channel };
};

module.exports = connectRabbitMQ;
