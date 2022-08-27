const { Schema, model } = require('mongoose');

const listingSchema = new Schema({
   name: {
      type: String,
      trim: true,
      required: true,
   },
   description: {
      type: String,
   },
   price: {
      type: Number,
      required: true,
      min: 0.99,
   },
   image: {
      type: String
   },
});

const Listing = model('Listing', listingSchema);

module.exports = Listing;
