var express = require('express');
var promoRouter = express.Router();


promoRouter.route('/')
		   .all(function(req, res, next) {
		   		res.writeHead(200, { 'Content-Type': 'text/plain' });
		   		next();

		   })
		   .get(function(req, res, next) {
		   		res.end('List all promos! \n');
		   })
		   .post(function(req, res, next){
		   		res.end('Will add the promo: ' + req.body.name + ' with details: ' + req.body.description);
		   })
		   .delete(function(req, res, next){
		   		res.end('Deleting all promos');
		   });

promoRouter.route('/:promoId')
		   .all(function(req, res, next){	
		   		next();
		   })
		   .get(function(req, res, next){
		   		res.send('Get promo with id: ' + req.params.promoId);
		   })
		   .put(function(req, res, next){
		   		res.send('Update promo with id: ' + req.params.promoId + 'with name: ' + req.body.name +'and desc: ' + req.body.description);
		   })
		   .delete(function(req, res, next){
		   		res.send('Deleting promo with id' + req.params.promoId);
		   });


module.exports = promoRouter;