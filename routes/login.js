var express = require('express');
var db = require('../database');
var app = express();

app.post('/', function (req, res) 
{
  var username = req.body.username;
  var password = req.body.psw;

  //console.log(username);
  //console.log(password);

  //Previous values, in case the user enters the wrong info 
  var oldusername = this.username;
  var oldpassword = this.password;

  this.username = username;
  this.password = password;
  //console.log(this.username);
  //console.log(this.password);

  var query = "SELECT * FROM users WHERE user_name = '" + this.username + "'" ;

  //If username is in the table then continue, if not error
   db.one(query)
        .then(function(results)
        {
          console.log(results);
          res.redirect('/'); 
        })
        .catch(function(error)
        {
          this.username = oldusername;
          this.password = oldpassword;
          console.log("Error quering the database for user");
          res.redirect('/');
        })

  //If username is in table and password matches redirect and success, else error 
  
  // Process the data received in req.body
  //res.redirect('/');
});

module.exports = app;