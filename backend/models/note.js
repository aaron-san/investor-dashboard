const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
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
    default: Date.now(),
  },
});

// Auto-update dateModified before save
// noteSchema.pre("save", function (next) {
//   this.dateModified = Date.now();
//   next();
// });

module.exports = mongoose.model("Note", noteSchema);
