const express = require("express");
router = express.Router();

const authController = require("../controllers/auth");
const jobsController = require("../controllers/jobs");

router
  .route("/")
  .get(authController.protect, jobsController.getAllJobs)
  .post(authController.protect, jobsController.createJob);

router
  .route("/:id")
  .get(authController.protect, jobsController.getJob)
  .patch(authController.protect, jobsController.updateJob)
  .delete(authController.protect, jobsController.deleteJob);

module.exports = router;
