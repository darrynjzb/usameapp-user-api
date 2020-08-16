const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const { context } = require('./app/config/');
const path = require('path');
const fs = require('fs');
const swaggerJSDoc = require('swagger-jsdoc');
const YAML = require('yamljs');

const app = express();

app.set('trust proxy', true);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

const mapErrorResponse = (err) => {
  let codeMsg = 'ERROR_500';
  if (err.code !== undefined) {
    codeMsg = err.code;
  }
  // eslint-disable-next-line prefer-const
  let object = { code: codeMsg, message: err.message };
  if (err.metadata) {
    object.metadata = err.metadata;
  }
};

// health check MS
app.get('/health', (req, res) => {
  res.status(200).send({ code: 'OK', message: `${context.name} up and running` });
});

// Swagger
const swaggerDefinition = YAML.load('./app/swagger-doc/head.yml');

const options = {
  swaggerDefinition,
  apis: ['./app/routes/*.js', './app/schemas/*.js', './app/swagger-doc/*.yml'],
};
const swaggerSpec = swaggerJSDoc(options);

app.use(`/api-docs/${context.version}.html`, (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, './app/swagger-doc/redoc.html')).toString();
  res.send(data.replace('{{version}}', `${context.version}`));
});

app.use(`/api-docs/${context.version}.json`, (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// Route
const routes = require('./app/routes/index');

app.use(`/${context.version}`, routes);

app.use((err, req, res, next) => { // eslint-disable-line
  let statusCode = 500;
  if (err.status !== undefined) {
    statusCode = err.status;
  }
  const errorResponse = mapErrorResponse(err);
  res.status(statusCode).send(errorResponse);
});

// Route not found (404)
app.use((req, res) => res.status(404).send({ code: 'NOT_FOUND_ROUTE', message: `Route ${req.url} Not found.` }));

module.exports = app;
