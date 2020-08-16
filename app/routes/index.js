/* eslint-disable import/no-dynamic-require */
const express = require('express');

const router = express.Router();
const fs = require('fs');
// Read each file in the routes directory
fs.readdirSync(__dirname).forEach((route) => {
  // Ignore index (i.e. this file)
  if (route.includes('index.js') || route.includes('spec.js')) {
    return;
  }
  // Strip the .js suffix
  // eslint-disable-next-line no-param-reassign
  route = route.split('.')[0];

  // Mount router
  // eslint-disable-next-line global-require
  router.use('', require(`./${route}.js`));
});
module.exports = router;
