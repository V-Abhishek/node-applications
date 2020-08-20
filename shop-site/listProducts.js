var data = require('faker');
console.log('============================');
console.log('    Welcome To My Shop     ');
console.log('============================');
for (let i = 0; i < 10; i++) {
	console.log(data.fake('{{commerce.productName}} - {{commerce.price}}'));
}
