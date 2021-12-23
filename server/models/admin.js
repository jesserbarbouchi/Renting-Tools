const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    minlength: [8, "Minimum password length is 8 characters"],
  },
});
module.exports = mongoose.model("Admin", adminSchema);
