const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the company name"],
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

CompanySchema.virtual("", {
  ref: "Job",
  foreignField: "company",
  localField: "_id",
});

module.exports = mongoose.model("Company", CompanySchema);
