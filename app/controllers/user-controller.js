const userService = require('../services/user-service');
const commerceService = require('../services/commerce-service');
const hashService = require('../services/hash-service');
const _ = require('lodash');

class UserController {
  async create(payload) {
    try {
      const hash = await hashService.create(payload.user.password);
      _.set(payload.user, 'password', hash);
      const user = await userService.create(payload.user);
      if (payload.user.is_commerce) {
        await commerceService.createMultiple(payload.commerces, user.id);
      }
      return user;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = UserController;
