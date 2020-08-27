const { setResponseRaw, setResponseWithError } = require('../util/common-response');
const { handlerError } = require('../util/handler-errors');
// const UserController = require('../controllers/user-controller');

const mock = {
  "code": "OK",
  "jwt": {
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbmFibGUiOnRydWUsImlzX2NvbW1lcmNlIjpmYWxzZSwiZW1haWwiOiJkYXJyeW5qemIxQGdtYWlsLmNvbSIsIm5hbWUiOiJEYXJyeW4gSm9zdcOpIiwibGFzdF9uYW1lIjoiQnJpY2XDsW8gQ3Jlc3BvIiwianRpIjoiMDkyMjAzODctZGQ1Yi00OTIxLTg0YTktMGE4ZWQxMDMyZGRmIiwiaWF0IjoxNTk4NTY2NzE3LCJleHAiOjE1OTg1NzA0MzJ9.60TDd-T7WiV0AjXu_4DrgVBbRUIe8Vf4AQ0JXaDxQb8",
    "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbmFibGUiOnRydWUsImlzX2NvbW1lcmNlIjpmYWxzZSwiZW1haWwiOiJkYXJyeW5qemIxQGdtYWlsLmNvbSIsIm5hbWUiOiJEYXJyeW4gSm9zdcOpIiwibGFzdF9uYW1lIjoiQnJpY2XDsW8gQ3Jlc3BvIiwianRpIjoiMDkyMjAzODctZGQ1Yi00OTIxLTg0YTktMGE4ZWQxMDMyZGRmIiwiaWF0IjoxNTk4NTY2NzE3LCJleHAiOjE1OTg1NzA0MzJ9.60TDd-T7WiV0AjXu_4DrgVBbRUIe8Vf4AQ0JXaDxQb8"
  }
};

module.exports.createUserMiddleware = async (req, res) => {
  try {
    // const controller = new UserController();
    // const user = await controller.create(req.body.payload);
    return setResponseRaw(res, 201, mock);
  } catch (e) {
    const { status, message, code } = handlerError(e);
    return setResponseWithError(res, status, message, code);
  }
};
