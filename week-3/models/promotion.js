/*

 {
      "name": "Weekend Grand Buffet",
      "image": "images/buffet.png",
      "label": "New",
      "price": "19.99",
      "description": "Featuring . . ."
}

*/

var mongoose = require('mongoose');
var Currency = require('mongoose-currency');
var Schema = mongoose.Schema;

var promotionSchema = Schema({
	name: { type: String, required: true },
	image: { type: String, required: true },
	label: { type: String, required: true },
	price: { type: Currency, required: true },
	description: { type: String, required: true }
}, { timestamps: true});

var Promotions = mongoose.model('Promotion', promotionSchema);

module.exports = Promotions;