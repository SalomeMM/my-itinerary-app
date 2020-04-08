const mongoose = require("mongoose");
const itinerarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  img: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
  },
  duration: {
    type: String,
  },
  price: {
    type: String,
  },
  hashtags: {
    type: Array,
  },
  activities: {
    type: Array,
  },
});
module.exports = mongoose.model("itinerary", itinerarySchema);
