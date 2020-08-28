const Joi = require('joi');

/**
 * @swagger
 * definitions:
 *   User:
 *     type: "object"
 *     properties:
 *       jwt:
 *         type: "object"
 *         properties:
 *           access_token:
 *             type: "string"
 *           refresh_token:
 *             type: "string"
*/
const regularUser = {
  payload: Joi.object().keys({
    user: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      name: Joi.string().required(),
      last_name: Joi.string().required(),
      is_commerce: Joi.boolean().required()
    }).required(),
    commerces: Joi.array().items(
      Joi.object().keys({
        display_name: Joi.string().required(),
        address: Joi.string().required(),
        web_page: Joi.string().required(),
        max_person_on_site: Joi.number().integer().required()
      })
    ).required()
  }).required()
};

const comemerceUser = {
  payload: Joi.object().keys({
    user: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      name: Joi.string().required(),
      last_name: Joi.string().required(),
      is_commerce: Joi.boolean().required()
    }).required(),
    commerces: Joi.array()
  }).required()
};

const getSchemaByType = (commerce) => {
  if (commerce) {
    return comemerceUser;
  }
  return regularUser;
};

module.exports.getSchemaByType = getSchemaByType;
