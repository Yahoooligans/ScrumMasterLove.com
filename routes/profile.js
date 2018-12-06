var express = require('express');
var db = require('../database');
var app = express();
module.exports = app;

app.get('/', function (request, response) {

    // Fetch the id of the item from the request.
    var itemId = request.params.id;
    // TODO: Initialize the query variable with a SQL query
    // that returns all the rows in the ‘store’ table
    var query = 'SELECT * FROM users';

    db.any(query)
        .then(function (rows) {
            // render views/store/list.ejs template file
            response.render('profile/list', {
                title: 'Profile',
                data: rows
            })
        })
        .catch(function (err) {
            // display error message in case an error
            request.flash('error', err);
            response.render('profile/list', {
                title: 'Profile',
                data: ''
            })
        })
});


app.get('/edit/(:id)', function (request, response) {
    // Fetch the id of the item from the request.
    var itemId = request.params.id;

    // TODO: Initialize the query variable with a SQL query
    // that returns all columns of an item whose id = itemId in the
    // 'store' table
    var query = 'SELECT * FROM users WHERE id =' + itemId;
    db.one(query)
        .then(function (row) {
            // if item not found
            if (row.length === 0) {
                request.flash('error', 'Item not found with id = ' + request.params.id);
                response.redirect('/profile')
            }
            else {
                response.render('profile/edit', {
                    title: 'Edit Item',
                    id: row.id,
                    username: row.user_name,
                    email: row.email,
                    sname: row.full_name
                })
            }
        })
        .catch(function (err) {
            request.flash('error', err);
            response.render('profile/list', {
                title: 'Profile',
                data: ''
            })
        })
});


// Route to update values. Notice that request method is PUT here
app.put('/edit/(:id)', function (req, res) {
    // Validate user input - ensure non emptiness
    req.assert('sname', 'Name is required').notEmpty();
    req.assert('user_name', 'Username is required').notEmpty();
    req.assert('email', 'Email is required').notEmpty();
    var itemId = req.params.id;
    
    var errors = req.validationErrors();
    if (!errors) { // No validation errors
        var item = {
            // sanitize() is a function used to prevent Hackers from inserting
            // malicious code(as data) into our database. There by preventing
            // SQL-injection attacks.
            sname: req.sanitize('sname').escape().trim(),
            user_name: req.sanitize('user_name').escape().trim(),
            email: req.sanitize('email').escape().trim()
        };
        
        var itemId = req.params.id;

        // TODO: Initialize the updateQuery variable with a SQL query
        // that updates the details of an item given its id
        // in the 'store' table
        var updateQuery = "UPDATE users SET full_name='" +item.sname+ "' ,email="+item.email+",user_name="+item.username+" WHERE id ="+ itemId;
        // Running SQL query to insert data into the store table
        db.none(updateQuery)
            .then(function (result) {
                req.flash('success', 'Data updated successfully!');
                res.redirect('/store');
            })
            .catch(function (err) {
                req.flash('error', err);
                res.render('profile/edit', {
                    title: 'Edit Item',
                    id: req.params.id,
                    sname: req.body.sname,
                    qty: req.body.username,
                    price: req.body.email
                })
            })
    }
    else {
        var error_msg = errors.reduce((accumulator, current_error) => accumulator + '<br />' + current_error.msg, '');
        req.flash('error', error_msg);
        res.render('profile/edit', {
            title: 'Edit Item,',
            id: req.body.id,
            sname: req.body.sname,
            qty: req.body.username,
            price: req.body.email
        })
    }
});