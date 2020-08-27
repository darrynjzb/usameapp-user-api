const userMiddleware = require('./default.userMiddleware');

module.exports = {
  name: process.env.CONTEXT_NAME || 'usameapp-user-api',
  config: process.env.NODE_ENV || 'local',
  port: process.env.CONTEXT_PORT || 3000,
  middlewares: {
    client: userMiddleware
  },
  version: process.env.CONTEXT_VERSION || 'v1'
};
