const Company = require("../models/Company");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Job = require("../models/Job");
const factory = require("./handlerFactory");

exports.getAllCompanies = factory.getAll(Company);
exports.getCompany = factory.getOne(Company, {
  path: "jobs",
  select: "-createdFor, -company",
});
exports.createCompany = factory.createOne(Company);
exports.updateCompany = factory.updateOne(Company);
exports.deleteCompany = factory.deleteOne(Company);
