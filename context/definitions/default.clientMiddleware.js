
module.exports = {
  create: process.env.NODE_CONTEXT_MIDDLEWARES_CREATE_CLIENT || 'validate-body-create-user-middleware,create-user-middleware'
};
