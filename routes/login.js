var express = require('express');
var db = require('../database');
var app = express();

app.post('/', function (req, res) 
{
  //Recieves text data from the form in the navbar found in views/layouts/header
  var username = req.body.username;
  var password = req.body.psw;

  //Previous values, in case the user enters the wrong info 
  var oldusername = this.username;
  var oldpassword = this.password;

  //Sets the global variables equal to the ones recieved in the form
  this.username = username;
  this.password = password;
 
  //Searches for any users in the database that have the same username and password.
  //On error, the previous username and email are restored to the global variables
  var query = "SELECT * FROM users WHERE user_name = '" + this.username + "' AND password = '" + this.password + "'" ;

  //If username is in the table and the password is correct then continue, if not error
   db.one(query)
        .then(function(results)
        {
          //redirect to the homepage
          res.redirect('/'); 
        })
        .catch(function(error)
        {
          this.username = oldusername;
          this.password = oldpassword;
          console.log("Error quering the database for user");
          res.redirect('/');
        })
});

module.exports = app;