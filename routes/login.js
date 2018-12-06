var express = require('express');
var db = require('../database');
var app = express();
module.exports = app;

app.get('/', function (request, response) {

   response.render('login/list', {title: 'Login'})
});


app.post('/', function (request, response) {

});