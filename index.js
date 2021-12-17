const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "node_app",
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: "localhost",
    port: "3306",
    dialect: "mysql",
  }
);

module.exports = sequelize;
