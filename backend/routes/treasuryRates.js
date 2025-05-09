const express = require("express");

const router = express.Router();
const { DGS1, DGS10 } = require("../models/TreasuryRates");

router.get("/", async (req, res) => {
  const dgs1 = DGS1.find({}).sort({ data: -1 }).limit(10).exec();
  const dgs10 = DGS10.find({}).sort({ data: -1 }).limit(10).exec();
  const results = await Promise.all([dgs1, dgs10]);
  res.send(results);
});

module.exports = router;
