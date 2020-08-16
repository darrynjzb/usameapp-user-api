const schema = require('../schemas/client').client;
const Joi = require('joi');
const BadRequestError = require('../util/common-errors').BadRequestError;

module.exports.validateBodyMiddleware = (req, res, next) => {
  const result = Joi.validate(req.body, schema);
  if (result.error) {
    throw new BadRequestError('CLIENT_ERROR_BODY', 'the body is not correct');
  }
  return next();
};
