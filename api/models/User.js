const mongoose = require("mongoose");

const userShcema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      required: true,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userShcema);
