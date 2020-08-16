module.exports = {
  mariadb: {
    host: process.env.MARIADB_HOST,
    port: Number(process.env.MARIADB_PORT),
    username: process.env.MARIADB_USERNAME,
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DATABASE,
    dialec: process.env.MARIADB_DIALEC,
    logging: process.env.MARIADB_LOGGING,
    dialectOptions: null,
    timezone: process.env.MARIADB_TIMEZONE,
  }
};
