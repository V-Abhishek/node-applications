const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb://localhost/association_references_db');
// Import Schemas
var User = require('./models/user');
var Post = require('./models/post');

/*
Post.create(
	{
		title: 'My first Post',
		content: 'This is my first post trying to understand the system'
	},
	function(err, newPost) {
		User.findOne({ userId: 'user1@gmail.com' }, function(err, user) {
			if (err) {
				console.log(err);
			} else {
				// Existing User
				if (user) {
					user.posts.push(newPost);
					user.save(function(err, user) {
						if (err) {
							console.error(err);
						} else {
							console.log(user);
						}
					});
				} else {
					// New User
					var newUser = new User({
						userId: 'user1@gmail.com',
						name: 'FirstIUser',
						posts: [ newPost ]
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
	}
);
*/
// Find and all this posts
User.findOne({ userId: 'user1@gmail.com' }).populate('posts').exec(function(err, user) {
	if (err) {
		console.error(err);
	} else {
		console.log(user);
	}
});
