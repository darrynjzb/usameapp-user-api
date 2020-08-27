const service = require('../services/user-service');

class UserController {
  async create(payload) {
    try {
      const user = await service.create(payload.user);
      return user;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = UserController;
