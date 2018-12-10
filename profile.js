//profile.js
//load the things we need to display

//set view engine to ejs
app.set('view engine', 'ejs');

//use res.render to load an ejs view file

//profile page
app.get('/', function(req, res){
	var name = name;
	var description = dob", "age", "gender;
	
	res.render('profile'{
		name: name,
		description: description
});
});
