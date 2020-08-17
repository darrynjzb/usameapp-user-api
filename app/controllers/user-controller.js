const BaseController = require('./base-controller');
const UserService = require('../services/user-service');

class UserController extends BaseController {
  async create(payload) {
    try {
      const user = await UserService.create(payload.user);
      return user;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = UserController;
