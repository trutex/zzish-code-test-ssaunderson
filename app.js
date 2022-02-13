const express = require('express');
const { getEnabledFeatures } = require('./get-features');

const app = express();

app.get('/features', (req, res) => {
  const { email, location } = req.query;
  if (!email || !location) {
    res.status(400).send('a query param value for "email" and "location" must be supplied')
  }
  const features = getEnabledFeatures(email, location);
  res.send({ features });
});

module.exports = app;
 