const express = require("express");
const router = express.Router();
const View = require("../models/Authmodel");
var randomstring = require("randomstring");

//POST
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const searchUser = await View.find({ password: req.body.adminPassword, userEmail: req.body.adminEmail });
    console.log(searchUser);
    let Authresponse = {
        'username': searchUser[0].userName,
        'authToken': randomstring.generate()
    }
    console.log(Authresponse);
    res.json(Authresponse)
  } catch (err) {
    res.status(404).json({ message: err });
  }

});


module.exports = router;
