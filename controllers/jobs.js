const Job = require("../models/Job");

exports.getAllJobs = (req, res, next) => {
  console.log("In the controller");
  res.status(200).json({
    status: "Success",
  });
};

exports.createJob = (req, res, next) => {
  console.log("In the controller");
  res.status(200).json({
    status: "Success",
  });
};

exports.getJob = (req, res, next) => {
  console.log("In the controller");
  res.status(200).json({
    status: "Success",
  });
};

exports.updateJob = (req, res, next) => {
  console.log("In the controller");
  res.status(200).json({
    status: "Success",
  });
};

exports.deleteJob = (req, res, next) => {
  console.log("In the controller");
  res.status(200).json({
    status: "Success",
  });
};
