var path = require('path');
var rootPath = path.normalize( __dirname + '/../../' );

module.exports = {
	development: {
		rootPath: rootPath,
		db: 'mongodb://localhost/multivision',
		port: process.env.PORT || 3030
	},

	production: {
		rootPath: rootPath,
		db: 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASSWORD + '@ds063892.mongolab.com:63892/multivision-mean',
		port: process.env.PORT || 80
	}
};