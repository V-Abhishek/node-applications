var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ encoded: true }));
app.set('view engine', 'ejs');

var friends = [ 'Rabbit', 'Dog' ];
app.get('/', function(request, response) {
	response.render('home');
});

app.get('/friends', function(request, response) {
	response.render('friends', { friends: friends });
});

app.post('/addfriends', function(request, response) {
	var newFriend = request.body.friendName;
	friends.push(newFriend);
	response.redirect('/friends');
});

app.listen(3000, function() {
	console.log('Server started');
});
