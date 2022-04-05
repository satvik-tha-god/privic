//User model
const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please Enter Your Username"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"]
  },
  createdAt: String,
});

module.exports = model("User", userSchema);
