const context = require('../config').context;
const BadRequestError = require('../util/common-errors').BadRequestError;

module.exports.checkChannelMiddleware = (req, res, next) => {
  if (req.headers['x-flow-channel'] === context.channel) {
    return next();
  }
  throw new BadRequestError('ERROR_CHANNEL_NOT_VALID', 'the channel is not correct');
};
