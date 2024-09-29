const express = require("express");
const sequelize = require("./config/database");
const consumeMessages = require("./services/rabbitmqConsumer");

const app = express();
app.use(express.json());

sequelize.sync().then(() => {
  console.log("Database connected");
});

consumeMessages();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
