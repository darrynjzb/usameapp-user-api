const bcrypt = require('bcrypt');
const { config } = require('../config');

const create = async (plainText) => {
  const psw = await bcrypt.hash(plainText, config.authentication.saltRounds);
  return psw;
};

const validate = async (plainText, pwsHashed) => {
  const valid = await bcrypt.compare(plainText, pwsHashed);
  return valid;
};

module.exports = {
  create,
  validate
};
