const { setResponseWithOk, setResponseWithError } = require('../util/common-response');
const { handlerError } = require('../util/handler-errors');
const UserController = require('../controllers/user-controller');

module.exports.createUserMiddleware = async (req, res) => {
  try {
    const controller = new UserController();
    const user = await controller.create(req.body.payload);
    return setResponseWithOk(res, 200, user);
  } catch (e) {
    const { status, message, code } = handlerError(e);
    return setResponseWithError(res, status, message, code);
  }
};