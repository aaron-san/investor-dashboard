require("dotenv").config();
const mongoose = require("mongoose");

// Optional: Add better connection options
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Timeout after 30s if cannot connect
  socketTimeoutMS: 30000, // Prevents hanging socket operations
};

const macroeconomic_data_db = mongoose.createConnection(
  process.env.DATABASE_URL_MACROECONOMIC_DATA,
  connectionOptions
);

// Monitor connection events
macroeconomic_data_db.on("connected", () => {
  console.log("Connected to macroeconomic DB:", macroeconomic_data_db.name);
});

macroeconomic_data_db.on("error", (err) => {
  console.error("Macroeconomic DB connection error:", err);
});

macroeconomic_data_db.on("disconnected", () => {
  console.warn("Macroeconomic DB disconnected");
});

// Optional: If using Mongoose 7+, you can await the promise
macroeconomic_data_db.asPromise().catch((err) => {
  console.error("Initial DB connection error:", err);
});

module.exports = macroeconomic_data_db;
