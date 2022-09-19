const User = require("../models/User");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

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

exports.updateMe = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        "This route is not for password updates. Please use /updateMyPassword.",
        400
      )
    );
  }

  const filteredBody = filterObj(
    req.body,
    "name",
    "email",
    "bio",
    "interest",
    "avatar"
  );

  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      user: updatedUser,
    },
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.deleteUser = (req, res, next) => {
  console.log("In the controller");
  res.status(200).json({
    status: "Success",
  });
};
