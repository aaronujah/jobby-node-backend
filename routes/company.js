const express = require("express");
const router = express.Router();
const companyController = require("../controllers/company");
const authController = require("../controllers/auth");
const jobRouter = require("../routes/jobs");

router.use("/:companyId/jobs", jobRouter);

router
  .route("/")
  .get(authController.protect, companyController.getAllCompanies)
  .post(authController.protect, companyController.createCompany);

router
  .route("/:id")
  .get(authController.protect, companyController.getCompany)
  .patch(authController.protect, companyController.updateCompany)
  .delete(
    authController.protect,
    authController.restrictTo("admin", "bot"),
    companyController.deleteCompany
  );

module.exports = router;
