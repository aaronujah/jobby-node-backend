const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    // To allow for nested GET reviews on tour (hack)
    let filter = {};
    if (req.params.companyId) {
      filter = { company: req.params.companyId };
      filter.createdFor = req.user.id;
    }

    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    // const doc = await features.query.explain();
    const doc = await features.query;

    res.status(200).json({
      status: "success",
      results: doc.length,
      data: {
        data: doc,
      },
    });
  });

exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    const {
      user: { id: userId },
      params: { id: id },
    } = req;

    let query = Model.findOne({ _id: id, createdFor: userId });
    if (popOptions) query = query.populate(popOptions);
    const doc = await query;

    if (!doc) {
      return next(
        new AppError(`No document found with that ID: ${req.params.id}`, 404)
      );
    }

    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);

    res.status(200).json({
      status: "Success",
      data: {
        doc,
      },
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const {
      user: { id: userId },
      params: { id: id },
    } = req;

    doc = await Model.findOneAndUpdate(
      { _id: id, createdFor: userId },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!doc) {
      return next(
        new AppError(`No document found with the ID: ${req.params.id}`, 404)
      );
    }

    res.status(200).json({
      status: "Success",
      data: {
        doc,
      },
    });
  });

exports.deleteByUser = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, {
      deleted: true,
      deletedAt: Date.now(),
    });

    if (!doc) {
      return next(
        new AppError(`No document found with the ID: ${req.params.id}`, 404)
      );
    }

    res.status(204).json({
      status: "Success",
      data: null,
    });
  });

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndRemove(req.params.id);

    if (!doc) {
      return next(
        new AppError(`No document found with the ID: ${req.params.id}`, 404)
      );
    }

    res.status(204).json({
      status: "Success",
      data: null,
    });
  });
