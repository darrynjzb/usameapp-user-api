const { User } = require('../db/models');

const create = async (payload) => {
  try {
    const user = await User.create(payload);
    return user;
  } catch (e) {
    throw e;
  }
};

module.exports = {
  create
};
