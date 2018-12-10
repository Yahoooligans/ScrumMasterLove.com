var express = require('express');
var db = require('../database');
var app = express();
module.exports = app;

app.post('/', function (request, response) {
   
   // Validate user input - ensure non emptiness
    request.assert('username', 'Username is required').notEmpty();
    request.assert('psw', 'Password is required').notEmpty();

});
module.exports = app;