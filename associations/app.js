const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb://localhost/association_db');

var postSchema = new mongoose.Schema({
	title: String,
	content: String
});

var Post = mongoose.model('Post', postSchema);

var userSchema = new mongoose.Schema({
	userId: String,
	name: String,
	posts: [ postSchema ] //Embed data
});

var User = mongoose.model('User', userSchema);

User.findOne({ userId: 'user1@gmail.com' }, function(err, user) {
	if (err) {
		console.log(err);
	} else {
		// Existing User
		if (user) {
			user.posts.push({
				title: 'My first Post',
				content: 'This is my first post trying to understand the system'
			});
			user.save(function(err, user) {
				if (err) {
					console.error(err);
				} else {
					console.log(user);
				}
			});
		} else {
			// New User
			var postAd = new Post({
				title: 'My first Post',
				content: 'This is my first post trying to understand the system'
			});
			postAd.save(function(err, postAd) {
				if (err) {
					console.error(err);
				}
			});
			var newUser = new User({
				userId: 'user1@gmail.com',
				name: 'FirstIUser',
				posts: [ postAd ]
			});
			newUser.save(function(err, newUser) {
				if (err) {
					console.error(err);
				} else {
					console.log(newUser);
				}
			});
		}
	}
});
