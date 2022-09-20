const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a the company name"],
      unique: true,
    },
    careerPage: {
      type: String,
      required: [true, "Enter the link to the career page of the company"],
      unique: true,
    },
    verified: {
      type: Boolean,
      default: false,
      select: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Company", CompanySchema);
