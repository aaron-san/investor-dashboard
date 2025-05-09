const mongoose = require("mongoose");
const { macroeconomic_data_db } = require("../db/index");

const treasurydgs1Schema = new mongoose.Schema({
  data: Date,
  value: String,
});

// Auto-update dateModified before save
// noteSchema.pre("save", function (next) {
//   this.dateModified = Date.now();
//   next();
// });

const treasurydgs10Schema = new mongoose.Schema({
  data: Date,
  value: String,
});

// Auto-update dateModified before save
// noteSchema.pre("save", function (next) {
//   this.dateModified = Date.now();
//   next();
// });

const DGS1 = macroeconomic_data_db.model("DGS1", treasurydgs1Schema, "DGS1");
const DGS10 = macroeconomic_data_db.model(
  "DGS10",
  treasurydgs10Schema,
  "DGS10"
);

module.exports = { DGS1, DGS10 };
