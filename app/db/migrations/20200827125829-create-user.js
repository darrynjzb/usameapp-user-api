/* eslint-disable no-unused-vars */
const { User } = require('../models/index');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', User.getFields());
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
