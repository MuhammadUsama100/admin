const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
  Code: String,
  Description: String,
  ChargeForPrivatePatients: Number,
  SpecialDiscounts: Number,
  Discount: String,
  FinalDiscount: Number,
});

module.exports = TestList = mongoose.model("TestList", TestSchema);
