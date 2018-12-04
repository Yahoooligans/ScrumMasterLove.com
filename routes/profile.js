var express = require('express');
var db = require('../database');
var app = express();
module.exports = app;

app.get('/(:id)', function (request, response) {

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

/*
app.get('/add', function (request, response) {
    // render views/store/add.ejs
    response.render('store/add', {
        title: 'Add New Item',
        sname: '',
        qty: '',
        price: ''
    })
});

// Route to insert values. Notice that request method is POST here
app.post('/add', function (request, response) {
    // Validate user input - ensure non emptiness
    request.assert('sname', 'sname is required').notEmpty();
    request.assert('qty', 'Quantity is required').notEmpty();
    request.assert('price', 'Price is required').notEmpty();

    var errors = request.validationErrors();
    if (!errors) { // No validation errors
        var item = {
            // sanitize() is a function used to prevent Hackers from inserting
            // malicious code(as data) into our database. There by preventing
            // SQL-injection attacks.
            sname: request.sanitize('sname').escape().trim(),
            qty: request.sanitize('qty').escape().trim(),
            price: request.sanitize('price').escape().trim()
        };
        // Running SQL query to insert data into the store table
        db.none('INSERT INTO store(sname, qty, price) VALUES($1, $2, $3)', [item.sname, item.qty, item.price])
            .then(function (result) {
                request.flash('success', 'Data added successfully!');
                // render views/store/add.ejs
                response.render('store/add', {
                    title: 'Add New Item',
                    sname: '',
                    qty: '',
                    price: ''
                })
            }).catch(function (err) {
            request.flash('error', err);
            // render views/store/add.ejs
            response.render('store/add', {
                title: 'Add New Item',
                sname: item.sname,
                qty: item.qty,
                price: item.price
            })
        })
    } else {
        var error_msg = errors.reduce((accumulator, current_error) => accumulator + '<br />' + current_error.msg, '');
        request.flash('error', error_msg);
        response.render('store/add', {
            title: 'Add New Item',
            sname: request.body.sname,
            qty: request.body.qty,
            price: request.body.price
        })
    }
});
*/

app.get('/edit/(:id)', function (request, response) {
    // Fetch the id of the item from the request.
    var itemId = request.params.id;

    // TODO: Initialize the query variable with a SQL query
    // that returns all columns of an item whose id = itemId in the
    // 'store' table
    var query = '';
    db.one(query)
        .then(function (row) {
            // if item not found
            if (row.length === 0) {
                request.flash('error', 'Item not found with id = ' + request.params.id);
                response.redirect('/store')
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
    req.assert('username', 'Username is required').notEmpty();
    req.assert('email', 'Email is required').notEmpty();

    var errors = req.validationErrors();
    if (!errors) { // No validation errors
        var item = {
            // sanitize() is a function used to prevent Hackers from inserting
            // malicious code(as data) into our database. There by preventing
            // SQL-injection attacks.
            sname: req.sanitize('sname').escape().trim(),
            qty: req.sanitize('username').escape().trim(),
            price: req.sanitize('email').escape().trim()
        };
        
        var itemId = req.params.id;

        // TODO: Initialize the updateQuery variable with a SQL query
        // that updates the details of an item given its id
        // in the 'store' table
        var updateQuery = '';

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