const User = require("../models/User");

exports.getAllUsers = (req, res, next) => {
  console.log("In the controller");
  res.status(200).json({
    status: "Success",
  });
};

exports.createUser = (req, res, next) => {
  console.log("In the controller");
  res.status(200).json({
    status: "Success",
  });
};

exports.getUser = (req, res, next) => {
  console.log("In the controller");
  res.status(200).json({
    status: "Success",
  });
};

exports.updateUser = (req, res, next) => {
  console.log("In the controller");
  res.status(200).json({
    status: "Success",
  });
};

exports.deleteUser = (req, res, next) => {
  console.log("In the controller");
  res.status(200).json({
    status: "Success",
  });
};
