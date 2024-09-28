const express = require("express");
const app = express();
const sequelize = require("./config/database");
require("dotenv").config();

app.use(express.json());

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
