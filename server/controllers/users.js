var mongoose = require("mongoose");
var User = require("../models/users");
var bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const Vonage = require("@vonage/server-sdk");

const vonage = new Vonage({
	apiKey: "a86d206e",
	apiSecret: "lAwbmiomkOKiH2bJ",
});

module.exports = {
	find_all_users: async (req, res) => {
		try {
			const users = await User.find().select("-password");
			res.send(users);
		} catch (err) {
			res.send(err);
		}
	},
	create_a_user: async (req, res) => {
		try {
			const {
				username,
				fullname,
				email,
				phone_number,
				password,
				adrress,
			} = req.body;
			const user = new User({
				username,
				fullname,
				email,
				phone_number,
				adrress,
				password,
			});
			if (
				!username ||
				!fullname ||
				!email ||
				!phone_number ||
				!password ||
				!adrress
			)
				return res
					.status(400)
					.json({ msg: "Please fill in all fields!" });
			const useer = await User.findOne({ email });
			if (useer)
				return res
					.status(400)
					.json({ msg: "This email already exists" });
			const doc = await user.save();

			res.status(200).send(useer);
		} catch (error) {
			res.status(404).json({ message: "error", error: "error" });
		}
	},
	login_a_user: async (req, res) => {
		try {
			console.log(req.body);
			let { email, password } = req.body;
			console.log(email);
			let user = await User.findOne({ email });
			console.log(user);
			if (!user) {
				return res.json({ msg: "this user doesn't exist" });
			}
			let isMatch = bcrypt.compareSync(password, user.password);
			if (!isMatch) {
				return res.json({ msg: "Wrong password" });
			}
			let token = jwt.sign(
				{
					username: user.username,
					_id: user._id,
				},
				"jwtSecret",
				{
					expiresIn: "1h",
				}
			);

			res.send({
				user,
				token: token,
			});
		} catch (error) {
			res.send(error);
		}
	},
	forgot: async (req, res) => {
		let data = req.body;
		console.log(data.email);
		let smtpTransport = nodemailer.createTransport({
			service: "Gmail",
			port: 465,
			auth: {
				user: "all.in.one.customer.services@gmail.com",
				pass: "Azerty123+",
			},
		});
		let mailOptions = {
			from: "all.in.one.customer.services@gmail.com",
			to: data.email,
			subject: "Message from customer services",
			html: `
		  <h3>thank you for choosing our services</h3>
		  <h3>it reached our attention that you forgot your password for your acount at <a href="http://localhost:4200">toolsforrent.com</a> for resseting your password click this link <h3>
		  <br><br><br><a href="http://localhost:4200/user/forgot">reset my password!</a><br><br><br>
		  <h3>feel free to contact us at our email : customer.service@gmail.com </h3>
		  <h3>or our phone number:54132756</h3>
		  `,
		};
		smtpTransport.sendMail(mailOptions, (error, response) => {
			if (error) {
				res.send(error);
			} else {
				res.send("success");
			}
		});
		smtpTransport.close();
	},

	forgotUpdate: async (req, res) => {
		let { email1, password1 } = req.body;
		console.log(email1);
		console.log(password1);
		let salt = await bcrypt.genSalt(10);
		password1 = await bcrypt.hash(password1, salt);
		await User.findOneAndUpdate(
			{ email: email1 },
			{ password: password1 },
			{ useFindAndModify: false, new: true }
		);
	},

	find_a_user_and_update: async (req, res) => {
		let id = req.params.userId;
		let user = req.body;
		console.log("=====>", id);
		console.log("=====>", user);
		User.findByIdAndUpdate(id, user)
			.then(() => res.send(`${user.fullname} infos are up to date`))
			.catch((error) => res.send(error));
	},
	send_a_message: async (req, res) => {
		console.log(req.body.phone_number);
		const from = "Vonage APIs";
		const to = 216 + "+" + req.body.phone_number;
		const text = "thank you for choosing our service , Rent-A-Tool team";
		vonage.message.sendSms(from, to, text, (err, responseData) => {
			if (err) {
				console.log(err);
			} else {
				if (responseData.messages[0]["status"] === "0") {
					console.log("Message sent successfully.");
				} else {
					console.log(
						`Message failed with error: ${responseData.messages[0]["error-text"]}`
					);
				}
			}
		});
	},
};
