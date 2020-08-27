/* eslint-disable no-console */
const app = require('../app');
const debug = require('debug')('express:server');
const http = require('http');
const displayRoutes = require('express-routemap');
const { context, config } = require('../app/config/index');
const Database = require('../app/db/sequelize');
const serverless = require('serverless-http');

/**
 * Normalize a port into a number, string, or false.
 */
const normalizePort = (val) => {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
};

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || context.port);
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port, () => {
  // name of the api
  console.log(`\x1b[33m starting  the microservice [ ${context.name} ]. at ${Date().toString()}`);
  console.log(`\x1b[34m listening on port ${port}`);
  console.log(`\x1b[32m running environment NODE_ENV=${process.env.NODE_ENV}`);
  console.log(`\x1b[32m running environment NODE_ENV_CONTEXT=${process.env.NODE_ENV_CONTEXT}`);
  console.log(`\x1b[32m context configuration:  ${JSON.stringify(context)}`);
  // to display routes
  displayRoutes(app);
});

/**
 * Event listener for HTTP server "error" event.
 */
const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

server.on('error', onError);

/**
 * Event listener for HTTP server "listening" event.
 */
const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe  ${addr}` : `port  ${addr.port}`;
  debug(`Listening on  ${bind}`);
};

server.on('listening', onListening);

/**
 * Database connection
 */

const database = async () => {
  try {
    const conn = new Database(config.mariadb);
    await conn.initConnection();
    console.log(`\x1b[32m Database: connection established successfully '${config.mariadb.dialect}', database '${config.mariadb.database}'`);
    await conn.initModels();
    console.log('\x1b[32m Database: relationships established');
  } catch (e) {
    console.error(`\x1b[31m Database: unable to connect to '${config.mariadb.dialect}', database '${config.mariadb.database}', with error: ${e}`);
  }
};

/**
 * Serverless
 */
const handler = serverless(app);

/**
 * innit
 */
(async (event, cntx) => {
  await database();
  await handler(event, cntx);
})();

exports.closeServer = () => {
  server.close();
};
