/* eslint-disable no-unused-vars */
const { Commerce } = require('../models/index');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(Commerce.getTableName(), Commerce.getFields());
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(Commerce.getTableName());
  }
};
