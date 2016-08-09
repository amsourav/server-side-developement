var mongoose = require('mongoose');
var Currency = require('mongoose-currency');
var Schema = mongoose.Schema;

var commentSchema = Schema({
	rating: {
		type: Number,
		min: 1,
		max: 5,
		required: true
	},
	comment: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	}
	}, {
		timestamps: true
});

var dishSchema = new Schema({
	name: { type: String, required: true, unique: true },
	image: { type: String, required: true },
	category: { type: String, required: true},
	label: { type: String, required: true},
	price: { type: Currency, required: true, min: 1},
	description: { type: String, required: true },
	comments: [commentSchema]
	},
	{ timestamps: true }
);

var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;

/*

{
      "name": "Uthapizza",
      "image": "images/uthapizza.png",
      "category": "mains",
      "label": "Hot",
      "price": "4.99",
      "description": "A unique . . .",
      "comments": [
        {
          "rating": 5,
          "comment": "Imagine all the eatables, living in conFusion!",
          "author": "John Lemon"
        },
        {
          "rating": 4,
          "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
          "author": "Paul McVites"
        }
      ]
}

*/