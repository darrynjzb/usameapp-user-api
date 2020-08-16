const clientMiddleware = require('./default.clientMiddleware');

module.exports = {
  name: process.env.NODE_CONTEXT_NAME || 'usameapp-user-api',
  port: process.env.NODE_CONTEXT_PORT || 3053,
  middlewares: {
    client: clientMiddleware
  },
  version: process.env.NODE_CONTEXT_VERSION || 'v1'
};
