const express = require("express");
const router = express.Router();
const UserController = require("../controllers/users");

router.route("/").get(UserController.find_all_users);
router.route("/login").post(UserController.login_a_user);
router.route("/signup").post(UserController.create_a_user);
router.route("/update/:userId").put(UserController.find_a_user_and_update);
router.route("/f").post(UserController.forgot);
router.route("/forgot/update").post(UserController.forgotUpdate);
router.route("/phone").post(UserController.send_a_message);

module.exports = router;
