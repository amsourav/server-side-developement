var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/conFusion';

mongoose.connect(url);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error to Mongo:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to Mongo server");
});

module.exports = db;
