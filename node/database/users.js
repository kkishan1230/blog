const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: String,
  userName: String,
  password: String,
});

module.export = mongoose.model("users", userSchema);
