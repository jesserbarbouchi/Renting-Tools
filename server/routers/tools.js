const express = require("express");
const router = express.Router();
const ToolsController = require("../controllers/tools");

router
  .route("/")
  .get(ToolsController.find_All)
  .post(ToolsController.create_A_New_One);

router
  .route("/:itemId")
  .get(ToolsController.find_One)
  .put(ToolsController.update_One)
  .patch(ToolsController.view_Plus_PLUS)
  .delete(ToolsController.remove_One);
module.exports = router;
