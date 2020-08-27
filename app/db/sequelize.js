/* eslint-disable array-callback-return */
/* eslint-disable no-console */
const { Sequelize } = require('sequelize');
const models = require('./models/index');

class Database {
  constructor(config) {
    this.instance = new Sequelize(
      config.database,
      config.username,
      config.password,
      {
        host: config.host,
        port: config.port,
        dialect: config.dialect,
        dialectOptions: {
          timezone: config.timezone,
        },
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

  relationships() {
    Object.keys(models).map((name) => {
      models[name].associate(models);
    });
  }
}

module.exports = Database;
