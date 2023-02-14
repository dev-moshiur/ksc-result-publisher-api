const express = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    mobileNumber: {
      type: Number,
    },
    query: {
      type: Object,
    },
  },
  { timestamps: true }
);

let User = mongoose.model("User", userSchema);

module.exports = User;
