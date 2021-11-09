import express from 'express';
const app = express();

const routes = require('./routes');

app.use('/search', routes.search);

module.exports = app;