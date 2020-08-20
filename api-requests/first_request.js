var request = require('request');
request('http://www.facebook.com', function(error, response, body) {
	if (error) {
		console.error('Something went wrong' + error);
	} else {
		if (!error && response.statusCode == 200) {
			console.log(body);
		}
	}
});
