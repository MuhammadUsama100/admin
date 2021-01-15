var express = require("express");
var router = express.Router();
var TestList = require("./model");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.post("/", async function (req, res) {
  try {
    await TestList.create({
      Code: req.body.Code,
      Description: req.body.Description,
      ChargeForPrivatePatients: req.body.ChargeForPrivatePatients,
      SpecialDiscounts: req.body.SpecialDiscounts,
      Discount: req.body.Discount,
      FinalDiscount: req.body.FinalDiscount,
    });
  } catch (e) {
    console.log(e.message);
  }
  console.log("done");
});
module.exports = router;
