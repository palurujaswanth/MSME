const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    gstin: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);