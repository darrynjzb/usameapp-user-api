const { setResponseRaw } = require('../util/common-response');

module.exports.createUserMiddleware = (req, res, next) => {
  return setResponseRaw(res, 200, 'create client');
};
