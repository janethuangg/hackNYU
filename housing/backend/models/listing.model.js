
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listingSchema = new Schema({
    username: { type: String, required: true },
    address: { type: String, required: true },
    apartmentNum: { type:String, required: false },
    description: { type: String, required: true },
    roomType: { type: String, required: true },
    // privateBathroom: { type: boolean, required: true },
    rent: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  }, {
    timestamps: true,
  });

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
