const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const restPasswordSchema = mongoose.Schema(
  {
    hash: String,
    role: String,
    email: String,
  },
  { versionKey: false } // to not save the __v attribute ... // Source: https://mongoosejs.com/docs/guide.html#versionKey
);

module.exports = mongoose.model("ResetPassword", restPasswordSchema);
