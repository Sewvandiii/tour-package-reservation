const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    conPassword: {
      type: String,
      required: true,
    },
  },
  { collection: "UserSignUp" }
);

module.exports = mongoose.model("Auths", UsersSchema);
