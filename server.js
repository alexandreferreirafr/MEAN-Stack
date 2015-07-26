var express = require('express'),
	stylus = require('stylus'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path) {
	return stylus(str).set('filename', path);
}

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser());
app.use(stylus.middleware(
	{
		src: __dirname + '/public',
		compile: compile
	}
));
app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost/multidivision');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error ...'));
db.once('open', function callback() {
	console.log('Multivision db open');
});

app.get('/partials/:partialsPath', function(req, res){
	res.render('partials/' + req.params.partialsPath);
});

app.get('*', function(req, res){
	res.render('index');
});

var port = 3030;
app.listen(port);
console.log('Server running on port:' + port);