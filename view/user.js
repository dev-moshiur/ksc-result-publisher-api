const mongoose = require("mongoose");
const express = require("express");

const router = express.Router();
const User = require("../models/user");

//CREATE

user.post("/", async (req, res) => {
  const single = new User(req.body);
  try {
    let saved = await single.save();

    res.status(200).json(saved);
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE
user.put("/:id", async (req, res) => {
  try {
    const updateResult = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateResult);
  } catch (error) {}
});

//DELETE
user.delete("/:id", async (req, res) => {
  try {
    console.log("reached");
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User Has Been Deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET SOME OR ONE

user.get("/:id", async (req, res) => {
  try {
    const result = await User.findById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
//GET ALL
user.get("/", async (req, res) => {
  try {
    const reau = await User.find({ ...req.query });
    res.status(200).json(reau);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
