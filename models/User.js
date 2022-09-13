const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter the name of the User"],
  },
  email: {
    type: String,
    required: [true, "Enter a valid email for the User"],
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
