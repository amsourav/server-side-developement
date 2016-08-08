var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');


var url = 'mongodb://localhost:27017/conFusion';

MongoClient.connect(url, function(err, db) {
	assert.equal(err, null);
	console.log("Connected correctly to server");
	var dishes = db.collection('dishes');
	dishes.insertOne({ name: "Pizza", description: "Bolognese" }, function(err, result) {
		assert.equal(err, null);
		console.log('After insert: \n');
		console.log(result.ops);

	dishes.find({}).toArray(function(err, docs){
		console.log(docs);
	});

	db.dropCollection("dishes", function(err, result){
		console.log('deleting');
		console.log(result);
		db.close();
	})
});
});
