require("dotenv").config();
const mongoose = require("mongoose");

// Optional: Add better connection options
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Timeout after 30s if cannot connect
  socketTimeoutMS: 30000, // Prevents hanging socket operations
};

const investment_data_db = mongoose.createConnection(
  process.env.DATABASE_URL_INVESTMENT_DATA,
  connectionOptions
);

// Monitor connection events
investment_data_db.on("connected", () => {
  console.log("Connected to investment DB:", investment_data_db.name);
});

investment_data_db.on("error", (err) => {
  console.error("Investment DB connection error:", err);
});

investment_data_db.on("disconnected", () => {
  console.warn("Investment DB disconnected");
});

// Optional: If using Mongoose 7+, you can await the promise
investment_data_db.asPromise().catch((err) => {
  console.error("Initial DB connection error:", err);
});

module.exports = investment_data_db;
