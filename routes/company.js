const express = require("express");
router = express.Router();
const {
  getAllCompanies,
  createCompany,
  getCompany,
  updateCompany,
  deleteCompany,
} = require("../controllers/company");

router.route("/").get(getAllCompanies).post(createCompany);
router.route("/:id").get(getCompany).patch(updateCompany).delete(deleteCompany);

module.exports = router;
