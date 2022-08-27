const mongoose = require("mongoose");

const { Schema } = mongoose;

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

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
