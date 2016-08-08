var express = require('express');

var leadershipRouter = express.Router();


leadershipRouter.route('/')
		   .all(function(req, res, next) {
		   		res.writeHead(200, { 'Content-Type': 'text/plain' });
		   		next();
		   })
		   .get(function(req, res, next) {
		   		res.end('List all leaders! \n');
		   })
		   .post(function(req, res, next){
		   		res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
		   })
		   .delete(function(req, res, next){

		   });


leadershipRouter.route('/:leaderID')
		   .all(function(req, res, next){
		   		next();
		   })
		   .get(function(req, res, next){
		   		res.send('Get leader with id: ' + req.params.leaderID);
		   })
		   .put(function(req, res, next){
		   		res.send('Update leader with id: ' + req.params.leaderID + 'with name: ' + req.body.name + 'and desc: ' + req.body.description);
		   })
		   .delete(function(req, res, next){
		   		res.send('Deleting leader with id' + req.params.leaderID);
		   });


module.exports = leadershipRouter;