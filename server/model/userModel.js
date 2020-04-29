const mongoose = require("mongoose");
// const uniqueValidator = require("mongoose-unique-validator"); //duplicates omitted
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
  },
});
module.exports = mongoose.model("user", userSchema);
