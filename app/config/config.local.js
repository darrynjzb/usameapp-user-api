module.exports = {
  mariadb: {
    host: process.env.MARIADB_HOST || 'localhost',
    port: Number(process.env.MARIADB_PORT) || 3300,
    username: process.env.MARIADB_USERNAME || 'root',
    password: process.env.MARIADB_PASSWORD || 'mariadb',
    database: process.env.MARIADB_DATABASE || 'usame',
    dialect: process.env.MARIADB_DIALECT || 'mariadb',
    logging: process.env.MARIADB_LOGGING || 'enabled',
    dialectOptions: null,
    timezone: process.env.MARIADB_TIMEZONE || 'Etc/GMT-3'
  },
  authentication: {
    saltRounds: Number(process.env.AUTHENTICATION_SALT_ROUNDS) || 10
  }
};
