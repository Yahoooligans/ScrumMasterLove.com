
var express = require('express');
var db = require('../database');
var app = express();
module.exports = app;

app.get('/', function (request, response) {

    // TODO: Initialize the query variable with a SQL query
    // that returns all the rows in the ‘store’ table
    var query = 'SELECT * FROM users';
    var query2 = 'SELECT * FROM answer_set';

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

      db.any(query2)
        .then(function (rows) {
            // render views/store/list.ejs template file
            response.render('answer/list', {
                title: 'Answers',
                data: rows
            })
        })
        .catch(function (err) {
            // display error message in case an error
            request.flash('error', err);
            response.render('answer/list', {
                title: 'Answers',
                data: ''
            })
        })
 
});

function CalculateScore(users,answer_set){
	var score;
	for(i=0;i<answer_set.length;i++){
		if(answers[i]=="a"){
			score += 1;
		}
		else if(answers[i]=="b"){
			score += 2;
		}
		else if(answers[i]=="c"){
			score += 3;
		}
		else{
			score += 4;
		}
	}
	return score;
}

function match(score,answer_set){
	var ratio;
	var status;
	var matches = [];
	for(i=0;i<users.length;i++){
		if(score >= answer_set.score){
			ratio = score/answer_set.score;
		}
		else{
			ratio = answer_set.score/score;
		}

		if(ratio >= 0.8){
			matches.append(answer_set.id);
		}
	}
}