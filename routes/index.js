var express = require('express');
var app = express();

app.get('/', function (request, response) {
   // render the views/index.ejs template file
   response.render('index', {title: 'Scrum Lovin'})
   res.send('you just hit the homepage\n')
});

module.exports = app;