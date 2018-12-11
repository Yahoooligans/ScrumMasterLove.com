var express = require('express');
var app = express();

app.get('/', function (request, res) {
   // render the views/index.ejs template file
   res.render('index', {title: 'Scrum Lovin'})
});

module.exports = app;