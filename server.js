var express = require('express');
var app = express();

var expressValidator = require('express-validator');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var flash = require('express-flash');
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.set('view engine', 'ejs');

app.use(expressValidator());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        var method = req.body._method;
        delete req.body._method;
        return method
    }
}));
app.use(cookieParser('csci3308'));
app.use(session({
    secret: 'csci3308',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}));
app.use(flash());


var index       = require('./routes/index');
var login       = require('./routes/login');
//var matches     = require('./routes/matches');
var profile     = require('./routes/profile');
//var register    = require('./routes/register');

app.use('/', index);
app.use('/login', login);
//app.use('/matches', matches);
app.use('/profile', profile);
//app.use('/register', register);

//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('hello world');
});

var port = 4000;
app.listen(port, function () {
    console.log('Server running on http://localhost:' + port)
});