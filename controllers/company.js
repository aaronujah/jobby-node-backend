const Company = require("../models/Company");

exports.getAllCompanies = (req, res, next) => {
  console.log("In the controller");
  res.status(200).json({
    status: "Success",
  });
};

exports.createCompany = (req, res, next) => {
  console.log("In the controller");
  res.status(200).json({
    status: "Success",
  });
};

exports.getCompany = (req, res, next) => {
  console.log("In the controller");
  res.status(200).json({
    status: "Success",
  });
};

exports.updateCompany = (req, res, next) => {
  console.log("In the controller");
  res.status(200).json({
    status: "Success",
  });
};

exports.deleteCompany = (req, res, next) => {
  console.log("In the controller");
  res.status(200).json({
    status: "Success",
  });
};
