const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/users");
const { requireAuth, checkUser } = require("../middleware/auth");

router.route("/login").post(UsersController.login_a_user);
router.route("/signup").post(UsersController.create_a_user);
router.route("/update/:userId").put(UsersController.find_a_user_and_update);
router.route("/f").post(UsersController.forgot);
router.route("/forgot/update").post(UsersController.forgotUpdate);
router.route("/phone").post(UsersController.send_a_message);

// prettier-ignore
router.route("/")
    .get(UsersController.find_All) // for the Admin
    .post(requireAuth, UsersController.create_A_New_One) // will be used from the interface of the admin
// .put(UsersController.update); // to ban, unban, lock account, etc ...

// prettier-ignore
router.route("/:userId")
    .get(UsersController.find_One) // user can read data of a specific user
    .put(requireAuth, UsersController.update_One) // user can update / disable his own account (or be banned or locked by the admin)
    .delete(requireAuth, UsersController.remove_One) // user can remove his own account

// prettier-ignore
router.route("/:userId/tools")
    .get(UsersController.find_All_Tools_of_Specific_User) // useful for the user & admin too
    .post(requireAuth, UsersController.create_One_Tool_of_Specific_User) // admin can add for a user an tool too if the user asked for help
    .delete(requireAuth, UsersController.remove_All_Tools_of_Specific_User) // a user can delete all his tools, or an admin can do it for a specific user

// prettier-ignore
router.route("/:userId/tools/:toolId")
    .get(UsersController.find_One_Tool_of_Specific_User) // any user (or admin) can have acces to a specific tool of a specific user
    .put(requireAuth, UsersController.update_One_Tool_of_Specific_User) // only the owner or admin can modify (or ban) a specific tool
    .delete(requireAuth, UsersController.remove_One_Tool_of_Specific_User) // only the owner (or any admin) can remove a specific tool that he owns

// prettier-ignore
router.route("/:userId/tools/:toolId/comments/:commentId")
// .get(UsersController.find_One_Comment_of_Specific_Tool_of_Specific_User)
// .put(UsersController.update_One_Comments_of_Specific_Tool_of_Specific_User)
// .delete(UsersController.remove_One_Comments_of_Specific_Tool_of_Specific_User)
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
router.route("/f").post(UsersController.forgot);
router.route("/forgot/update").post(UsersController.forgotUpdate);
router.route("/phone").post(UsersController.send_a_message);

module.exports = router;
