var express = require('express');
var db = require('../database');
var app = express();
module.exports = app;

app.get('/', function (request, response) {

    // TODO: Initialize the query variable with a SQL query
    // that returns all the rows and columns in the 'store' table
    var query = 'SELECT match1,match2,match3,match4,match5,match6,match7,match8,match9,match10 FROM matches';

    db.any(query)
      .then(function (rows) {
          // render views/store/list.ejs template file
          response.render('matches/list', {
              title: 'Matches listing',
              data: rows
          })
      })
      .catch(function (err) {
          // display error message in case an error
          request.flash('error', err);
          response.render('matches/list', {
              title: 'Matches listing',
              data: ''
          })
      })
});

/*app.get('/add', function (request, response) {
    // render views/matches/add.ejs
    response.render('matches/add', {
        title: 'Add New Item',
        sname: '',
        qty: '',
        price: ''
    })
});*/

// Route to insert values. Notice that request method is POST here
app.post('/add', function (request, response) {
    function CalculateScore(){
        var score;
        for(i=1;i<VALUES.length-1;i++){
            if(VALUES[i]=="a"){
                score += 1;
            }
            else if(VALUES[i]=="b"){
                score += 2;
            }
            else if(VALUES[i]=="c"){
                score += 3;
            }
            else{
                score += 4;
            }
        }
        return score;
    }

    function match(){
        var ratio;
        var status;
        var matches = [];
        var score = CalculateScore(users.id)
        for(i=0;i<users.length;i++){
            if(score >= answer_set.score){
                ratio = score/answer_set.score;
            }
            else{
                ratio = answer_set.score/score;
            }

            if(ratio >= 0.8){
                INSERT INTO MATCHES VALUES id
            }
        }
    }

    // Validate user input - ensure non emptiness
    request.assert('full_name', 'name is required').notEmpty();
    //request.assert('qty', 'Quantity is required').notEmpty();
    //request.assert('price', 'Price is required').notEmpty();

    var errors = request.validationErrors();
    if (!errors) { // No validation errors
        var item = {
            // sanitize() is a function used to prevent Hackers from inserting
            // malicious code(as data) into our database. There by preventing
            // SQL-injection attacks.
            full_name: request.sanitize('full_name').escape().trim(),
            email: request.sanitize('email').escape().trim(),
            //price: request.sanitize('price').escape().trim()
        };
        // Running SQL query to insert data into the store table
        db.none('INSERT INTO matches(name, email) VALUES($1, $2, $3)', [users.full_name,users.email])
            .then(function (result) {
                request.flash('success', 'Data added successfully!');
                // render views/store/add.ejs
                response.render('matches/add', {
                    title: 'Add New Item',
                    sname: '',
                    qty: '',
                    price: ''
                })
            }).catch(function (err) {
            request.flash('error', err);
            // render views/store/add.ejs
            response.render('matches/add', {
                title: 'Add New Item',
                sname: item.sname,
                qty: item.qty,
                price: item.price
            })
        })
    } else {
        var error_msg = errors.reduce((accumulator, current_error) => accumulator + '<br />' + current_error.msg, '');
        request.flash('error', error_msg);
        response.render('matches/add', {
            title: 'Add New Item',
            sname: request.body.sname,
            qty: request.body.qty,
            price: request.body.price
        })
    }
});