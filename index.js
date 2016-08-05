var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

var app = express();
var dishRouter = express.Router();

// Loggers
var morgan = require('morgan');
app.use(morgan('dev'));
// End Loggers

var hostname = 'localhost';
var port = 3000;

dishRouter.use(bodyParser.json());

dishRouter.route('/')
	.all(function(req, res, next){
	  res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
	})
	.get(function(req, res, next){
		res.end('Will send all the dishes to you!');
	})
	.post(function(req, res, next){
		res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
		debugger;	
	});

dishRouter.route('/:dishId')
	.all(function(req, res, next){
	  res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
	})
	.get(function(req, res, next){
		res.end('Showing dish with id ' + req.params.dishId)
	});




app.use('/dishes', dishRouter);
app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
	console.log('running on http://localhost:3000!');
});