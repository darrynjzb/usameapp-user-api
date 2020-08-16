/* eslint-disable no-console */
const { Sequelize } = require('sequelize');

class Database {
  constructor(config) {
    this.instance = new Sequelize(
      config.table,
      config.username,
      config.password,
      {
        host: config.host,
        port: config.port,
        dialect: config.dialec,
        dialectOptions: config.dialectOptions,
        logging: config.logging === 'enabled' ? console.log : false
      }
    );
  }

  getConnection() {
    return this.instance;
  }

  async initConnection() {
    await this.getConnection().authenticate();
  }
}

module.exports = Database;
