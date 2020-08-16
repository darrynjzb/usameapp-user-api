const BadRequestError = require('../util/common-errors').BadRequestError;
const context = require('../config').context;

module.exports.checkCountryMiddleware = (req, res, next) => {
  if (req.headers['x-flow-country'] === context.country) {
    return next();
  }
  throw new BadRequestError('ERROR_COUNTRY_NOT_VALID', 'the country is not correct');
};
