const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  { collection: "UserDetails" }
);

module.exports = mongoose.model("Users", UsersSchema);
