const { Router } = require('express');
const { context } = require('../config');
const { getMiddlewares } = require('../util/get-middleware');

const router = Router();

/**
 * @swagger
 *  /user:
 *  post:
 *    summary: "Create a new user"
 *    description: "Create a new user"
 *    tags:
 *    - user
 *    produces:
 *    - "application/json"
 *    consumes:
 *    - "application/json"
 *    parameters:
 *    - in: header
 *      name: Content-Type
 *      type: string
 *      description: "Description: The content type. \n \n Example: application/json"
 *      required: true
 *    - in: "body"
 *      name: "body"
 *      description: "Object to create a new user"
 *      required: true
 *      schema:
 *        $ref: "#/parameters/postUser"
 *    responses:
 *      200:
 *        description: "Ok"
 *        schema:
 *          $ref: "#/parameters/resPostUser"
 *      400:
 *        description: "Incorrect body"
 *        schema:
 *          $ref: "#/parameters/errorIncorrectBody"
 *      409:
 *        description: "Conflic error"
 *        schema:
 *          $ref: "#/parameters/errorConflicError"
 *      500:
 *        description: "Internal server error"
 *        schema:
 *          $ref: "#/parameters/errorInternal"
 */
router.post('/user', getMiddlewares(context.middlewares.user.create));

module.exports = router;
