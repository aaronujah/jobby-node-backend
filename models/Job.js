const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Every Job must have a name"],
  },
  createdFor: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  jobPage: {
    type: String,
    required: [true, "Every job must have a link"],
  },
  industry: {
    type: String,
    required: [true, "Every job must belong to an industry"],
  },
  company: {
    type: mongoose.Schema.ObjectId,
    ref: "Company",
    required: [true, "Every Job must belong to a company"],
  },
  description: {
    type: String,
  },
  information: {
    type: String,
    required: [true, "Every Job must have a detail to be valid"],
  },
  location: {
    type: {
      type: String,
      default: "Point",
      enum: ["Point"],
    },
    coordinates: [Number],
  },
  saved: {
    type: Boolean,
    default: false,
  },
  deleted: {
    type: Boolean,
    default: false,
    select: false,
  },
  deletedAt: {
    type: Date,
    select: false,
  },
});

module.exports = mongoose.model("Job", JobSchema);
