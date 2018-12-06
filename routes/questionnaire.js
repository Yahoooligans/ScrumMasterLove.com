var express = require('express');
var db = require('../database');
var app = express();
module.exports = app;


app.get('/', function (request, response) {
    // render views/store/add.ejs
    response.render('questionnaire/questionnaire',{
	title: 'questionnaire',
	full_name: '',
	user_name: '',
	date_of_birth: '',
	age: '',
	email: '',
	password: '',})
});


// Route to insert values. Notice that request method is POST here
app.post('/', function (request, response) {
    // Validate user input - ensure non emptiness
    request.assert('full_name', 'Full name is required').notEmpty();
    request.assert('user_name', 'User name is required').notEmpty();
    request.assert('date_of_birth', 'Birthday is required').notEmpty();
    request.assert('age', 'Age is required').notEmpty();
    request.assert('email', 'Email is required').notEmpty();
    request.assert('password', 'Password is required').notEmpty();

    var errors = request.validationErrors();
    if (!errors) { // No validation errors
        var item = {
            // sanitize() is a function used to prevent Hackers from inserting
            // malicious code(as data) into our database. There by preventing
            // SQL-injection attacks.
            full_name: request.sanitize('full_name').escape().trim(),
            user_name: request.sanitize('user_name').escape().trim(),
            date_of_birth: request.sanitize('date_of_birth').escape().trim(),
            age: request.sanitize('age').escape().trim(),
            email: request.sanitize('email').escape().trim(),
            password: request.sanitize('password').escape().trim(),
            q1: request.sanitize('q1').escape().trim(),
            q2: request.sanitize('q2').escape().trim(),
            q3: request.sanitize('q3').escape().trim(),
            q4: request.sanitize('q4').escape().trim(),
            q5: request.sanitize('q5').escape().trim(),
            q6: request.sanitize('q6').escape().trim(),
            q7: request.sanitize('q7').escape().trim(),
            q8: request.sanitize('q8').escape().trim(),
            q9: request.sanitize('q9').escape().trim(),
            q10: request.sanitize('q10').escape().trim()
        };
        // Running SQL query to insert data into the store table
        db.none('INSERT INTO users(full_name, user_name, date_of_birth, age, email, password, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $15, $16)', [item.full_name, item.user_name, item.date_of_birth, item.age, item.email, item.password, item.q1, item.q2, item.q3, item.q4, item.q5, item.q6, item.q7, item.q8, item.q9, item.q10])
            .then(function (result) {
                request.flash('success', 'Successfully created a user!');
                // render to profile
                response.render('questionnaire/questionnaire',{
       		title: 'questionnaire',
        	full_name: '',
        	user_name: '',
        	date_of_birth: '',
        	age: '',
        	email: '',
        	password: '',})

            }).catch(function (err) {
            request.flash('error', err);
            // render views/store/add.ejs
            response.render('questionnaire/questionnaire',{
	        title: 'questionnaire',
       	 	full_name: '',
      	 	user_name: '',
     	  	date_of_birth: '',
      	  	age: '',
        	email: '',
        	password: '',})

	})
	}
     else {
        var error_msg = errors.reduce((accumulator, current_error) => accumulator + '<br />' + current_error.msg, '');
        request.flash('error', error_msg);
        response.render('questionnaire/questionnaire',{
        title: 'questionnaire',
        full_name: '',
        user_name: '',
        date_of_birth: '',
        age: '',
        email: '',
        password: '',})

        
    }
});
