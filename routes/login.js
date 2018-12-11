var express = require('express');
var db = require('../database');
var app = express();

app.post('/', function (req, res) 
{
  var sid = req.sessionID;
  var username = req.body.user;
  var password = req.body.pass;

  var queryUser = 'SELECT * FROM users WHERE'

  db.one(queryUser)
  .then(function (row) {
    
  })
  .catch(function (err) {
    // display error message in case an error
    request.flash('error', err);
  })
  
  // Process the data received in req.body
  res.redirect('/');
});

module.exports = app;