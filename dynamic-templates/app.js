var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(request, response) {
	response.send('Welcome to Dynamic Templates project');
});
app.get('/result', function(request, response) {
	response.render('result');
});
app.get('*', function(request, response) {
	response.send('Sorry, page not found');
});

app.listen(3000, function() {
	console.log('Server started');
});
