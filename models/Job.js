const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter the name of the Job entry"],
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  jobPage: {
    type: String,
    required: [true, "Enter the link to the Job's page"],
  },
  industry: {
    type: String,
    required: [true, "Enter the industry this Job belongs to"],
  },
  company: {
    type: mongoose.Types.ObjectId,
    ref: "Company",
    required: [true, "Enter the Company that listed this Job"],
  },
  description: {
    type: String,
  },
  information: {
    type: String,
    required: [true, "Every Job must have a detail to be valid"],
  },
  location: {
    type: String,
  },
  saved: {
    type: Boolean,
    default: false,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Job", JobSchema);
