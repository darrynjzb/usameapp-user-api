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
module.exports.client = {
  id: Joi.number().integer().required(),
  name: Joi.string().required(),
  mail: Joi.string().email(),
  createdAt: Joi.date()
};
