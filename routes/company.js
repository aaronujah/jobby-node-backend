const express = require("express");
const router = express.Router();
const companyController = require("../controllers/company");
const authController = require("../controllers/auth");
const jobRouter = require("../routes/jobs");

router.use(authController.protect);
router.use("/:companyId/jobs", jobRouter);

router
  .route("/")
  .get(companyController.getAllCompanies)
  .post(companyController.createCompany);

router
  .route("/:id")
  .get(companyController.getCompany)
  .patch(companyController.updateCompany)
  .delete(
    authController.restrictTo("admin", "bot"),
    companyController.deleteCompany
  );

module.exports = router;
