const Joi = require('joi');

/**
 * @swagger
 * definitions:
 *   User:
 *     type: "object"
 *     properties:
 *       id:
 *         type: "integer"
 *       email:
 *         type: "string"
 *       name:
 *         type: "string"
 *       last_name:
 *         type: "string"
 *       enabled:
 *         type: "boolean"
 *       is_commerce:
 *         type: "boolean"
*/
module.exports.user = {
  payload: Joi.object().keys({
    user: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      name: Joi.string().required(),
      last_name: Joi.string().required()
    }).required(),
    commerces: Joi.array()
  }).required()
};
