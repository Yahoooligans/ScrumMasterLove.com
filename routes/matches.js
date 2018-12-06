var express = require('express');
var db = require('../database');
var app = express();
module.exports = app;
/*app.get('/', function (request, response) {
    // render views/store/add.ejs
    response.render('matches/list',{
	title: 'insert username to view matches',
	user_name: '',})
});*/
// Route to insert values. Notice that request method is POST here
app.get('/', function (request, response) {
    // Validate user input - ensure non emptiness
    //user_name = 'chase13';
    //request.assert('user_name', 'User name is required').notEmpty();
    //var errors = request.validationErrors();
    var errors = false;
    if (!errors) { // No validation errors
        var item = {
            // sanitize() is a function used to prevent Hackers from inserting
            // malicious code(as data) into our database. There by preventing
            // SQL-injection attacks.
            //user_name: request.sanitize('user_name').escape().trim()
        };
        // Running SQL query to insert data into the store table
        db.any('SELECT id,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10 FROM answer_set')
        	.then(function(results){
        		//request.flash('success', 'Successfully took user name!');
        		console.log(results)
        		response.render('matches/list',{
        			title: 'matches',
        			data: results,
        			username: 'chase13',
        			id: '1'
        		})	
        	})
        .catch(function(err){
        	response.render('matches/list',{
        		title: 'matches'
        	})
        })
}

        /*db.none('INSERT INTO users(full_name, user_name, date_of_birth, age, email, password, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $15, $16)', [item.full_name, item.user_name, item.date_of_birth, item.age, item.email, item.password, item.q1, item.q2, item.q3, item.q4, item.q5, item.q6, item.q7, item.q8, item.q9, item.q10])
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
	}*/
     else {
        var error_msg = errors.reduce((accumulator, current_error) => accumulator + '<br />' + current_error.msg, '');
        request.flash('error', error_msg);
        response.render('matches/list',{
        title: 'matches',
        user_name: ''
})
        
    }
});

//app.post here