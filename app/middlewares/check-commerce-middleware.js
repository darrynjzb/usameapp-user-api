const BadRequestError = require('../util/common-errors').BadRequestError;
const context = require('../config').context;

module.exports.checkCommerceMiddleware = (req, res, next) => {
  if (req.headers['x-flow-commerce'] === context.commerce) {
    return next();
  }
  throw new BadRequestError('ERROR_COMMERCE_NOT_VALID', 'the commerce is not correct');
};
