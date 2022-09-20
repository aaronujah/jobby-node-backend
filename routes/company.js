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
  .get(authcontroller.protect, companyController.getCompany)
  .patch(authcontroller.protect, companyController.updateCompany)
  .delete(
    authcontroller.protect,
    authController.restrictTo("admin", "bot"),
    companyController.deleteCompany
  );

module.exports = router;
