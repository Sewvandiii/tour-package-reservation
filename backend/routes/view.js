const express = require("express");
const router = express.Router();
const View = require("../models/Viewmodel");

router.get("/", async (req, res) => {
  try {
    const viewList = await View.find();
    res.json(viewList);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const view = new View({
    tname: req.body.tname,
    tdescription: req.body.tdescription,
    price: req.body.price,
    tnumber: req.body.tnumber,
  });
  try {
    const savedView = await view.save();
    res.json(savedView);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/search", async (req, res) => {
  console.log(req.body);
  try {
    const searchView = await View.find({ tnumber: req.body.tnumber });
    res.json(searchView);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/delete", async (req, res) => {
  console.log(req.body);
  try {
    const deleteView = await User.deleteOne({ tnumber: req.body.tnumber });
    res.json(deleteView);
    console.log(searchView);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/update", async (req, res) => {
  console.log(req.body);
  try {
    const updateView = await User.updateOne(
      { tnumber: req.body.tnumber },
      {
        $set: {
          tname: req.body.tname,
          price: req.body.price,
          tdescription: req.body.tdescription,
          tnumber: req.body.tnumber,
     
        },
      }
    );
    res.json(updateView);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
