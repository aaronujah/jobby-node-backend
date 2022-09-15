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
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Company", CompanySchema);
