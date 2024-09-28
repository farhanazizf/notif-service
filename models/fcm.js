const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const FCMJob = sequelize.define(
  "FCMJob",
  {
    identifier: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    deliverAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "fcm_job",
    timestamps: false,
  }
);

module.exports = FCMJob;
