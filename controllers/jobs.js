const Job = require("../models/Job");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const scrapper = require("../utils/jobScrapper");

exports.getAllJobs = catchAsync(async (req, res, next) => {
  const jobs = await Job.find({ createdFor: req.user.id });
  count = jobs.length;

  if (!jobs) {
    return next(new AppError("You have no Job"));
  }

  res.status(200).json({
    status: "Success",
    count,
    data: {
      jobs,
    },
  });
});

exports.createJob = catchAsync(async (req, res, next) => {
  const job = await Job.create(req.body);

  res.status(201).json({
    status: "Success",
    data: {
      job,
    },
  });
});

// exports.updateAllJobs = catchAsync(async (req, res, next) => {
//   res.status(200).json({
//     status: "Success",
//     data: {
//       updatedJob,
//     },
//   });
// });

exports.getJob = catchAsync(async (req, res, next) => {
  const {
    user: { id: userId },
    params: { id: jobId },
  } = req;

  const job = await Job.findOne({ _id: jobId, createdFor: userId });

  if (!job) {
    return next(new AppError(`You do not have a Job with the id: ${jobId}`));
  }

  res.status(200).json({
    status: "Success",
    data: {
      job,
    },
  });
});

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

exports.deleteJob = catchAsync(async (req, res, next) => {
  await Job.findByIdAndUpdate(req.user.id, {
    deleted: true,
    deletedAt: Date.now(),
  });

  res.status(200).json({
    status: "Success",
    data: null,
  });
});
