var express = require('express');
var db = require('../database');
var app = express();
module.exports = app;

app.get('/', function (request, response) {
    var item = {

    };

    // TODO: Initialize the query variable with a SQL query
    // that returns all the rows in the ‘store’ table
    var query = 'SELECT * FROM users';

    db.any(query)
        .then(function (rows) {
            // render views/store/list.ejs template file
            console.log(rows)
            response.render('profile/list', {
                title: 'users',
                data: rows
            })
        })
        .catch(function (err) {
            // display error message in case an error
            request.flash('error', err);
            response.render('profile/list', {
                title: 'users',
                data: ''
            })
        })
});