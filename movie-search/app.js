const express = require('express');
const app = express();
const request = require('request');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('search');
});

app.get('/result', (req, res) => {
	var movieTitle = req.query.movieName;
	var url = 'http://www.omdbapi.com/?s=' + movieTitle + '&apiKey=thewdb';
	request(url, (error, response, body) => {
		if (!error && response.statusCode == 200) {
			const parsedData = JSON.parse(body);
			if (parsedData['Response'] === 'True') {
				res.render('result', { data: parsedData });
			} else {
				res.render('no-results');
			}
		} else {
			console.error('Error Message ', error);
		}
	});
});

app.get('*', (req, res) => {
	res.send('Sorry, page not found');
});

app.listen(3000, function() {
	console.log('Server Started');
});
