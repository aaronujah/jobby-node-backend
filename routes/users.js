const express = require("express");

const router = express.Router();
const userController = require("../controllers/users");
const authController = require("../controllers/auth");

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router
  .route("/")
  .post(userController.createUser)
  .get(userController.getAllUsers);

router
  .route("/:id")
  .get(userController.getUser)
  .delete(userController.deleteUser)
  .patch(userController.updateUser);

module.exports = router;
