const mongoose = require("mongoose");
const { investment_data_db } = require("../db/index");

// console.log("DB connection:", investment_data_db); // Should not be undefined

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
  },
  asset: {
    type: String,
  },
  content: {
    type: String,
  },
  dateModified: {
    type: Date,
    required: false,
    default: Date.now,
  },
});

// Auto-update dateModified before save
// noteSchema.pre("save", function (next) {
//   this.dateModified = Date.now();
//   next();
// });

module.exports = investment_data_db.model("Note", noteSchema, "notes");
