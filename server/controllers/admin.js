var mongoose = require("mongoose");
var Tools = require("../models/tools");
var Admin = require("../models/admin.js")
var bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
module.exports = {
    find_all_tools: async (req, res) => {
        try {
            const users = await Tools.find()
            res.send(users);
        } catch (err) {
            res.send(err);
        }
    },
    delete_tool: async (req, res) => {
        const id = req.params._id
        console.log(id);
        try {
            
            const data = await Tools.findByIdAndRemove(id)
            res.send(data);
        }
        catch (err) {
            console.log(err)
            res.send(err);
        }


    },
    login_an_admin: async (req, res) => {
		try {
		  let {email, password} = req.body
		  let user = await Admin.findOne({email})
			if (!user) {
				return res.json({msg:"this user doesn't exist"})
			}
		  let isMatch = bcrypt.compareSync(password, user.password);
		  if (!isMatch) {
			return res.json({msg:"Wrong password"})
		}
		  let token = jwt.sign(
			{
			  username: user.username,
			  _id: user._id
			},
			"jwtSecret",
			{
			  expiresIn: "1h"
			})
			
			res.send({
				user,
				token: token,
			});
		} catch (error) {
			res.send(error);
		}
	  }

}