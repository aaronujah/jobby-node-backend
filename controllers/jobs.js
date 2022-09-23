const Job = require("../models/Job");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const scrapper = require("../utils/jobScrapper");
const factory = require("./handlerFactory");

// exports.updateAllJobs = catchAsync(async (req, res, next) => {
//   res.status(200).json({
//     status: "Success",
//     data: {
//       updatedJob,
//     },
//   });
// });

exports.updateJob = catchAsync(async (req, res, next) => {
  const {
    user: { id: userId },
    params: { id: jobId },
  } = req;

  const job = await Job.findOne({ _id: jobId, createdFor: userId });

  const updates = await scrapper.updateJob(job.jobPage);
  const updatedJob = await Job.findByIdAndUpdate(jobId, updates);

  res.status(200).json({
    status: "Success",
    data: {
      updatedJob,
    },
  });
});

exports.getAllJobs = factory.getAll(Job);
exports.updateUserJob = (req, res, next) => {
  req.body = req.body.saved;
  next();
};
exports.updateJob = factory.updateOne(Job);
exports.getJob = factory.getOne(Job);
exports.createJob = factory.createOne(Job);
exports.deleteUserJob = factory.deleteByUser(Job);
exports.deleteJob = factory.deleteOne(Job);
