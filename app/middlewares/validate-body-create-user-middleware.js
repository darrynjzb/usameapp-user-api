const schema = require('../schemas/user').user;
const { setResponseWithError } = require('../util/common-response');

module.exports.validateBodyCreateUserMiddleware = (req, res, next) => {
  const result = schema.validate(req.body);
  if (result.error) {
    return setResponseWithError(res, 400, 'the body is not correct', 'CREATE_USER_ERROR_BODY');
  }
  return next();
};
