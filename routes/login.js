var express = require('express');
var db = require('../database');
var app = express();

app.post('/', function (req, response) 
{
  // Process the data received in req.body
  response.redirect('/');
});

module.exports = app;