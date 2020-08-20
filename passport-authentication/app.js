var express = require('express');
var app = express();
var passport = require('passport');
var bodyParser = require('body-parser');
var LocalStrategy = require('passport-local');
var passportLocalMongoose = require('passport-local-mongoose');
var User = require('./models/user');

const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb://localhost/PAuth_db');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	require('express-session')({
		secret: 'It goes on',
		resave: false,
		saveUninitialized: false
	})
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/', function(req, res) {
	res.render('home');
});

app.get('/safe', IsLoggedIn, function(req, res) {
	res.render('safe');
});

// Auth Routes

//Show Register Form
app.get('/register', function(req, res) {
	res.render('register');
});

//Register
app.post('/register', function(req, res) {
	User.register(new User({ username: req.body.username }), req.body.password, function(err, user) {
		if (err) {
			console.error(err);
			return res.render('register');
		}
		passport.authenticate('local')(req, res, function() {
			res.redirect('/safe');
		});
	});
});

//Login Form
app.get('/login', function(req, res) {
	res.render('login');
});

//Authenticate
app.post('/login', passport.authenticate('local', { successRedirect: '/safe', failureRedirect: '/login' }), function(
	req,
	res
) {});

app.get('/logout', function(req, res) {
	req.logOut();
	res.redirect('/');
});

//Middleware
function IsLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/login');
}

app.listen(3000, function() {
	console.log('Server Started');
});
