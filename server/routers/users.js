const express = require("express");
const router = express.Router();
const UserController = require("../controllers/users");
var User = require("../models/users");

router.route("/").get(UserController.find_all_users);
router.route("/login").post(UserController.login_a_user);
router.route("/signup").post(UserController.create_a_user);

router.route("/getone/:userId").get(async (req, res) => {
  const id = req.params.userId;
  const user = await User.findById({ _id: id });
  res.send(user);
});

router.route("/update/:userId").put(async (req, res) => {
  const id = req.params.userId;
  const data = req.body;
  for (var k in data) {
    if (!data[k]) {
      delete data[k];
    }
  }
  const updatedUser = await User.findByIdAndUpdate({ _id: id }, data, {
    new: true,
  });
  res.send(updatedUser);
});
router.route("/f").post(UserController.forgot);
router.route("/forgot/update").post(UserController.forgotUpdate);
router.route("/phone").post(UserController.send_a_message);

module.exports = router;
