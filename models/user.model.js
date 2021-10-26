const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema(
  {
    pseudo: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 15,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      validate: [isEmail],
    },
    password: {
      type: String,
      required: true,
      maxlength: 1024,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
