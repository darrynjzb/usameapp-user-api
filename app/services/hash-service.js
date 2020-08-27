const bcrypt = require('bcrypt');
const { config } = require('../config');

const create = async (plainText) => {
  try {
    const psw = await bcrypt.hash(plainText, config.authentication.saltRounds);
    return psw;
  } catch (e) {
    throw e;
  }
};

const validate = async (plainText, pwsHashed) => {
  try {
    const valid = await bcrypt.compare(plainText, pwsHashed);
    return valid;
  } catch (e) {
    throw e;
  }
};

module.exports = {
  create,
  validate
};
