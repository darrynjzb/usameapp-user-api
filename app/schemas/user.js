const Joi = require('joi');

/**
 * @swagger
 * definitions:
 *   Client:
 *     type: "object"
 *     properties:
 *       id:
 *         type: "string"
 *       name:
 *         type: "string"
 *       mail:
 *         type: "string"
 *       createdAt:
 *         type: "string"
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
