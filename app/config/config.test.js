module.exports = {
  mariadb: {
    host: process.env.MARIADB_HOST,
    port: Number(process.env.MARIADB_PORT),
    username: process.env.MARIADB_USERNAME,
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DATABASE,
    dialect: process.env.MARIADB_DIALECT,
    logging: process.env.MARIADB_LOGGING,
    dialectOptions: null,
    timezone: process.env.MARIADB_TIMEZONE,
  },
  authentication: {
    saltRounds: Number(process.env.AUTHENTICATION_SALT_ROUNDS)
  }
};
