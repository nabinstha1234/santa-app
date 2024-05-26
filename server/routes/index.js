const express = require('express');

const santaMessageRouter = require('./santa-message.route');

const app = express();

app.use('/santa-message', santaMessageRouter);

module.exports = app;
