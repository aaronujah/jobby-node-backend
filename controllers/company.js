const Company = require("../models/Company");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Job = require("../models/Job");

exports.getAllCompanies = catchAsync(async (req, res, next) => {
  companies = await Company.find().populate({
    path: "jobs",
    select: "-createdFor, -company",
  });

  res.status(200).json({
    status: "Success",
    count: companies.length,
    data: {
      companies,
    },
  });
});

exports.createCompany = catchAsync(async (req, res, next) => {
  const company = await Company.create(req.body);

  res.status(200).json({
    status: "Success",
    data: {
      company,
    },
  });
});

exports.getCompany = catchAsync(async (req, res, next) => {
  const company = await Company.findById(req.params.id).populate({
    path: "jobs",
    select: "-createdFor, -company",
  });
  console.log(company);

  res.status(200).json({
    status: "Success",
    data: {
      company,
    },
  });
});

exports.updateCompany = catchAsync(async (req, res, next) => {
  company = await Company.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json({
    status: "Success",
    data: {
      company,
    },
  });
});

exports.deleteCompany = catchAsync(async (req, res, next) => {
  await Company.findByIdAndRemove(req.params.id);

  res.status(200).json({
    status: "Success",
  });
});
