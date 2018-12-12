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
        db.any("SELECT * FROM users") //WHERE user_name = '" + this.username + "'" )
            .then(function(results){
                //request.flash('success', 'Successfully took user name!');
                console.log(results)
                response.render('matches/list',{
                    title: 'matches',
                    data: results,
                    username: this.username
                })  
            })
        .catch(function(err){
            console.log("Error quering the database for user")
            response.render('matches/list',{
                title: 'matches',
                data: ''
            })
        })
}

  
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

app.post('/', function (req, res) {
  res.send('POST request to homepage');
});
