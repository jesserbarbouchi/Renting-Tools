var mongoose = require("mongoose");
var Tools = require("../models/tools");

module.exports = {
	find_all_tools: async (req, res) => {
		try {
			const tools = await Tools.find().select("").populate("user");
			res.send(tools);
		} catch (err) {
			res.send(err);
		}
	},
	create_a_tool: (req, res) => {
		try {
			const tool = req.body;
			console.log(tool);
			Tools.create(tool);
			res.send("tool added");
		} catch (err) {
			res.send(err);
		}
	},
	find_use_tools: async (req, res) => {
		try {
			let id = req.params.id;
			const tools = await Tools.find({ user: id }).select("");
			res.send(tools);
		} catch (err) {
			res.send(err);
		}
	},
	find_tool_and_update: async (req, res) => {
		try {
			let id = req.params.id;
			let update = req.body;
			let result = await Tools.findByIdAndUpdate(id, update);
			res.send(result);
		} catch (err) {
			res.send(err);
		}
	},
};
