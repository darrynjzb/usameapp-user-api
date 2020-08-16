const Router = require('express').Router;
const context = require('../config').context;
const getMiddlewares = require('../util/get-middleware').getMiddlewares;

const router = Router();

/**
 * @swagger
 *   /client/:
 *  post:
 *    summary: "Create a new client"
 *    description: "Create a new client"
 *    tags:
 *    - client
 *    produces:
 *    - "application/json"
 *    consumes:
 *    - "application/json"
 *    parameters:
 *    - in: header
 *      name: x-flow-channel
 *      type: string
 *      description: "Description: Id of channel. \n \n Example: Mobile"
 *      required: true
 *    - in: header
 *      name: x-flow-commerce
 *      type: string
 *      description: "Description: Business Code.  \n \n Example: Banco"
 *      required: true
 *    - in: header
 *      name: x-flow-country
 *      type: string
 *      description: "Description: Business Country.  \n \nExample: CL"
 *      required: true
 *    - in: header
 *      name: Content-Type
 *      type: string
 *      description: "Description: The content type.  \n \n Example: application/json"
 *      required: true
 *    - in: "body"
 *      name: "body"
 *      description: "dat to create a new client"
 *      required: true
 *      schema:
 *        $ref: "#/parameters/newClient"
 *    responses:
 *      200:
 *        description: "Ok"
 *        schema:
 *          $ref: "#/parameters/response"
 *      400:
 *        description: "Client error"
 *        schema:
 *          $ref: "#/parameters/error400"
 *      404:
 *        description: "Client not found"
 *        schema:
 *          $ref: "#/parameters/error404"
 *      500:
 *        description: "internal error"
 *        schema:
 *          $ref: "#/parameters/error"
 */
// router.post('/client/', getMiddlewares(context.middlewares.client.create));

/**
 * @swagger
 * /client/{id}:
 *  get:
 *    summary: "Find client by ID"
 *    description: "Returns a single client"
 *    tags:
 *    - client
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - name: "id"
 *      in: "path"
 *      description: "the id of the client"
 *      required: true
 *      type: "integer"
 *      format: "int64"
 *    - in: header
 *      name: x-flow-channel
 *      type: string
 *      description: "Description: Id of channel. \n \n Example: Mobile"
 *      required: true
 *    - in: header
 *      name: x-flow-commerce
 *      type: string
 *      description: "Description: Business Code.  \n \n Example: Banco"
 *      required: true
 *    - in: header
 *      name: x-flow-country
 *      type: string
 *      description: "Description: Business Country.  \n \nExample: CL"
 *      required: true
 *    - in: header
 *      name: Content-Type
 *      type: string
 *      description: "Description: The content type.  \n \n Example: application/json"
 *      required: true
 *    consumes:
 *      - application/json
 *    responses:
 *      200:
 *        description: "Ok"
 *        schema:
 *          $ref: "#/parameters/response"
 *      400:
 *        description: "Client error"
 *        schema:
 *          $ref: "#/parameters/error400"
 *      404:
 *        description: "Client not found"
 *        schema:
 *          $ref: "#/parameters/error404"
 *      500:
 *        description: "internal error"
 *        schema:
 *          $ref: "#/parameters/error"
*/
// router.get('/client/:id', getMiddlewares(context.middlewares.client.get));

/**
 * @swagger
 *   /client/{idClient}:
 *  delete:
 *    summary: "Delete a client by ID"
 *    description: "Deletes a single client"
 *    tags:
 *    - client
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - name: "idClient"
 *      in: "path"
 *      description: "the id of the client"
 *      required: true
 *      type: "integer"
 *      format: "int64"
 *    - in: header
 *      name: x-flow-channel
 *      type: string
 *      description: "Description: Id of channel. \n \n Example: Mobile"
 *      required: true
 *    - in: header
 *      name: x-flow-commerce
 *      type: string
 *      description: "Description: Business Code.  \n \n Example: Banco"
 *      required: true
 *    - in: header
 *      name: x-flow-country
 *      type: string
 *      description: "Description: Business Country.  \n \nExample: CL"
 *      required: true
 *    - in: header
 *      name: Content-Type
 *      type: string
 *      description: "Description: The content type.  \n \n Example: application/json"
 *      required: true
 *    consumes:
 *      - application/json
 *    responses:
 *      200:
 *        description: "Ok"
 *        schema:
 *          $ref: "#/parameters/deleteOk"
 *      400:
 *        description: "Client error"
 *        schema:
 *          $ref: "#/parameters/error400"
 *      404:
 *        description: "Client not found"
 *        schema:
 *          $ref: "#/parameters/error404"
 *      500:
 *        description: "internal error"
 *        schema:
 *          $ref: "#/parameters/error"
 */
// router.delete('/client/:id', getMiddlewares(context.middlewares.client.delete));

module.exports = router;
