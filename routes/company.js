const express = require("express");
router = express.Router();
companyController = require("../controllers/company");
authController = require("../controllers/auth");

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
