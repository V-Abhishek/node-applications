const mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
	userId: String,
	name: String,
	posts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Post'
		}
	] //Embed ids
});

module.exports = mongoose.model('User', userSchema);
