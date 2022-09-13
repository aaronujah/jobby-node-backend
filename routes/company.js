const express = require("express");
const {
  getAllCompanies,
  createCompany,
  getCompany,
  updateCompany,
  deleteCompany,
} = require("../controllers/company");

router = express.Router();

router.route("/").get(getAllCompanies).post(createCompany);
router.route("/:id").get(getCompany).patch(updateCompany).delete(deleteCompany);

module.exports = router;
