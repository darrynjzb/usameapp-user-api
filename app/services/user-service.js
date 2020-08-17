const { User } = require('../db/models');
const BaseService = require('./base-service');

class UserService extends BaseService {
  async create(payload) {
    try {
      const user = await super.baseCreate(payload);
      return user;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = new UserService(User);
