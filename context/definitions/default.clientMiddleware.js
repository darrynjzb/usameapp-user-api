
module.exports = {
  create: process.env.NODE_CONTEXT_MIDDLEWARES_CREATE_CLIENT ||
    [
      'check-channel-middleware',
      'check-country-middleware',
      'check-commerce-middleware',
      'validate-body-middleware',
      'create-client-middleware'
    ],
  get: process.env.NODE_CONTEXT_MIDDLEWARES_GET_CLIENT ||
    [
      'check-channel-middleware',
      'check-country-middleware',
      'check-commerce-middleware',
      'validate-id-middleware',
      'get-client-middleware'
    ],
  delete: process.env.NODE_CONTEXT_MIDDLEWARES_DELETE_CLIENT ||
    [
      'check-channel-middleware',
      'check-country-middleware',
      'check-commerce-middleware',
      'validate-id-middleware',
      'delete-client-middleware'
    ]
};
