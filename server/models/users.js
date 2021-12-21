const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
	{
		username: { type: String, unique: true },
		fullname: String,
		adrress: String,
		connected: { type: Boolean, default: false },
		email: {
			type: String,
			unique: true,
		},
		phone_number: {
			type: String,
			unique: true,
		},
		password: {
			type: String,
			minlength: [8, "Minimum password length is 8 characters"],
		},
		fav_category: Array,

		profile_image_uri: {
			type: String,
			default:
				"https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
		},
		verified: { type: Boolean, default: true },
	},
	{ timestamps: true, versionKey: false }
);

userSchema.pre("save", function (next) {
	var user = this;
	bcrypt.genSalt(10, function (err, salt) {
		if (err) return next(err);
		bcrypt.hash(user.password, salt, function (err, hash) {
			if (err) return next(err);
			user.password = hash;
			next();
		});
	});
});

module.exports = mongoose.model("User", userSchema);
