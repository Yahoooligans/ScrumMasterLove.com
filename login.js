var express = require('express');
var db = require('../database');
var app = express();

app.post('/', function (req, res) 
{
  var username = req.body.username;
  var password = req.body.psw;

  //console.log(username);
  //console.log(password);

  this.username = username;
  this.password = password;

  console.log(this.username);
  console.log(this.password);
  
  // Process the data received in req.body
  res.redirect('/');
});

module.exports = app;