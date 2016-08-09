/*

{
      "name": "Peter Pan",
      "image": "images/alberto.png",
      "designation": "Chief Epicurious Officer",
      "abbr": "CEO",
      "description": "Our CEO, Peter, . . ."
}

*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var leadershipSchema = Schema({
	name: { type: String, required: true },
	image: { type: String, required: true },
	designation: { type: String, required: true },
	abbr: { type: String, required: true },
	description: { type: String, required: true }	
}, { timestamps: true });

var Leaders = mongoose.model('Leader', leadershipSchema);

module.exports = Leaders;

