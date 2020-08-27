/* eslint-disable no-unused-vars */
const { User } = require('../models/index');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(User.getTableName(), User.getFields());
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(User.getTableName());
  }
};
