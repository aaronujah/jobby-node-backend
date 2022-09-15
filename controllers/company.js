const Company = require("../models/Company");

exports.getAllCompanies = async (req, res, next) => {
  companies = await Company.find();

  res.status(200).json({
    status: "Success",
    data: companies,
  });
};

exports.createCompany = async (req, res, next) => {
  try {
    const company = await Company.create(req.body);

    res.status(200).json({
      status: "Success",
      data: company,
    });
  } catch (error) {
    console.log(error);
  }
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
