const express = require("express");

const router = express.Router();
const userController = require("../controllers/users");
const authController = require("../controllers/auth");

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);
router.patch(
  "/updateMyPassword",
  authController.protect,
  authController.updatePassword
);

router.use(authController.protect);

router.get("/me", userController.getMe, userController.getUser);
router.patch("/updateMe", userController.updateMe);
router.delete("/deleteMe", userController.deleteMe);

router.route("/").get(userController.getAllUsers);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(authController.restrictTo("admin", "bot"), userController.updateUser)
  .delete(authController.restrictTo("admin", "bot"), userController.deleteUser);

module.exports = router;
