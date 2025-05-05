const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    ticker: String,
    name_damodaran: String,
    industry_damodaran: { type: String },
    sector_damodaran: { type: String },
    country_damodaran: { type: String },
    name_edgar: { type: String },
    industry_edgar: { type: String },
    industry_detail_edgar: { type: String },
    sector_yhoo: { type: String },
    industry_yhoo: { type: String },
    name_simfin: { type: String },
    sector_simfin: { type: String },
    industry_simfin: String,
    name_yhoo: String,
    name_seeking_alpha: { type: String },
    sector_seeking_alpha: { type: String },
    industry_seeking_alpha: { type: String },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt
    strict: false, // Allow extra fields that aren't in the schema
  }
);

// Auto-update dateModified before save
// noteSchema.pre("save", function (next) {
//   this.dateModified = Date.now();
//   next();
// });

module.exports = mongoose.model("Profile", profileSchema, "profiles");
