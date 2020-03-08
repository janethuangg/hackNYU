
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listingSchema = new Schema({
    username: { type: String, required: false },

    address1: { type: String, required: true },
    address2: { type:String, required: false },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    headline: { type: String, required: true },
    // roomType: { type: String, required: true },
    // privateBathroom: { type: boolean, required: true },
    rent: { type: Number, required: true },
    // startDate: { type: Date, required: true },
    // endDate: { type: Date, required: true },
  }, {
    timestamps: true,
  });

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
