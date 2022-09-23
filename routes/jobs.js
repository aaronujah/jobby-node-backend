const express = require("express");
router = express.Router({ mergeParams: true });

const authController = require("../controllers/auth");
const jobsController = require("../controllers/jobs");
// const router = require("./company");
// const companyRouter = require("./company");

router.use(authController.protect);

router.route("/").get(jobsController.getAllJobs).post(jobsController.createJob);

router
  .route("/:id")
  .get(jobsController.getJob)
  .patch(jobsController.updateUserJob, jobsController.updateJob)
  .delete(jobsController.deleteUserJob);

router.use(authController.restrictTo("admin", "bot"));
router
  .route("/admin/:id")
  .patch(jobsController.updateJob)
  .delete(authController.protect, jobsController.deleteJob);

module.exports = router;
