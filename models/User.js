const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "PLease enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
  },
  bio: {
    type: String,
  },
  interest: {
    type: [String],
  },
  avatar: {
    type: String,
    default: "avatar.png",
  },
});

module.exports = mongoose.model("User", UserSchema);
