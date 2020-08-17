const schema = require('../schemas/user').user;
const Joi = require('joi');
const { setResponseWithError } = require('../util/common-response');

module.exports.validateBodyCreateUserMiddleware = (req, res, next) => {
  const result = Joi.validate(req.body, schema);
  if (result.error) {
    return setResponseWithError(res, 400, 'the body is not correct', 'CREATE_USER_ERROR_BODY');
  }
  return next();
};
