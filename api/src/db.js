const { Sequelize } = require("sequelize");
const DB = ''
const sequelize = new Sequelize(
  DB,
  {
    logging: false,
    native: false,
  }
);

module.exports = { sequelize };
