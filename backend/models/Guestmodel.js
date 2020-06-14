const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema(
  {
    adminEmail: {
      type: String,
      required: true,
    },
    adminPassword: {
      type: String,
      required: true,
    },
  },
  { collection: "GuestDetails" }
);

module.exports = mongoose.model("Guest", UsersSchema);
