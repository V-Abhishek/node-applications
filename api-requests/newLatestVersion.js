const request = require('request-promise');

request('https://jsonplaceholder.typicode.com/users/3')
	.then((body) => {
		const parsedData = JSON.parse(body);
		console.log(`${parsedData.name} lives in ${parsedData.address.city}`);
	})
	.catch((error) => {
		console.log(error);
	});
