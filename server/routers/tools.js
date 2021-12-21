const express = require("express");
const router = express.Router();
const ToolController = require("../controllers/tools");

router
	.route("/")
	.get(ToolController.find_all_tools)
	.post(ToolController.create_a_tool);

router
	.route("/:id")
	.get(ToolController.find_use_tools)
	.patch(ToolController.find_tool_and_update);
module.exports = router;
