
module.exports = {
  create: process.env.CONTEXT_MIDDLEWARE_CREATE_USER || 'validate-body-create-user-middleware,create-user-middleware'
};
