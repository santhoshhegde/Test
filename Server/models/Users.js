const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  designation: { type: String, required: true },
  gender: { type: String, required: true },
  courses: { type: [String], required: true },
  image: { type: String }, // Path to the uploaded image
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
