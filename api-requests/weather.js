var request = require('request');
request('https://jsonplaceholder.typicode.com/users/3', function(error, response, body) {
	// eval(require('pryjs').it);
	if (!error && response.statusCode == 200) {
		var parsedData = JSON.parse(body);
		console.log(parsedData.name + 'lives in ' + parsedData['address']['city']);
	}
});
