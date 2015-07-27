var mongoose = require('mongoose');

module.exports = function(config){
	mongoose.connect(config.db);
		
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error ...'));
	db.once('open', function callback() {
		console.log('Multivision db open');
	});

	var userSchema = mongoose.Schema({
		firstName: 'string',
		lastName: 'string',
		username: 'string'
	});
	var User = mongoose.model('User', userSchema);

	User.find({}).exec(function(err, collection){
		if (collection.length === 0) {
			User.create({firstName: 'Alexandre', lastName:'Ferreira', username: 'ferreira'});
			User.create({firstName: 'Ana', lastName:'Cicconi', username: 'cicconi'});
			User.create({firstName: 'Bill', lastName:'Gates', username: 'gates'});
		}
	});
};
