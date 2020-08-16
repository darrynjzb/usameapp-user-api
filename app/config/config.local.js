module.exports = {
  mariadb: {
    host: process.env.MARIADB_HOST || 'localhost',
    port: Number(process.env.MARIADB_PORT) || 3306,
    username: process.env.MARIADB_USERNAME || 'root',
    password: process.env.MARIADB_PASSWORD || 'Darryn1692**',
    database: process.env.MARIADB_DATABASE || 'usame',
    dialec: process.env.MARIADB_DIALEC || 'mysql',
    logging: process.env.MARIADB_LOGGING || 'enabled',
    dialectOptions: null,
    timezone: process.env.MARIADB_TIMEZONE || '-03:00'
  }
};
