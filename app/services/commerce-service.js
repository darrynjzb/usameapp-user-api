/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
const { Commerce } = require('../db/models');
const _ = require('lodash');

const create = async (payload, userId) => {
  try {
    _.set(payload, 'user_id', userId);
    const commerce = await Commerce.create(payload);
    return commerce;
  } catch (e) {
    throw e;
  }
};

const createMultiple = async (commerces, userId) => {
  for (let i = 0; i < commerces.length; i++) {
    await create(commerces[i], userId);
  }
};

module.exports = {
  create,
  createMultiple
};
