const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: String,
  userName: String,
  password: String,
});

module.exports = mongoose.model("User", UserSchema);
