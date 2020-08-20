var express = require('express');
var app = express();

app.get('/', function(request, response) {
	response.send('Welcome to My Assignment');
});

app.get('/speak/:animalName', function(request, response) {
	let animal = request.params.animalName.toLowerCase();
	// Dictionary of Sounds
	let sounds = {
		pig: 'Oink',
		cow: 'Moo',
		dog: 'Woof Woof'
	};
	response.send('The ' + animal + " says '" + sounds[animal] + "'");
});

app.get('/repeat/:word/:times', function(request, response) {
	let word = request.params.word;
	let times = Number(request.params.times);
	let output = '';
	for (let index = 0; index < times; index++) {
		output += word + ' ';
	}
	response.send(output);
});

app.get('*', function(request, response) {
	response.send('Sorry, page not found');
});

app.listen(3000, function() {
	console.log('Server Started');
});
