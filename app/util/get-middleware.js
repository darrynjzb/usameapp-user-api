/* eslint-disable no-param-reassign */
const camelCase = require('lodash/camelCase');

function getMiddlewares(mdwStr) {
  const middlewareNames = mdwStr.trim()
    .split(',');
  const arrayOfMiddleware = [];
  middlewareNames.forEach((name) => {
    name = name.trim();
    const middleware = require(`./../middlewares/${name}`)[camelCase(name)]; // eslint-disable-line
    arrayOfMiddleware.push(middleware);
  });
  return arrayOfMiddleware;
}

module.exports.getMiddlewares = getMiddlewares;
