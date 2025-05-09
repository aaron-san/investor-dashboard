require("dotenv").config();
const mongoose = require("mongoose");

// Optional: Add better connection options
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Timeout after 30s if cannot connect
  socketTimeoutMS: 30000, // Prevents hanging socket operations
};

const stock_data_db = mongoose.createConnection(
  process.env.DATABASE_URL_STOCK_DATA,
  connectionOptions
);

// Monitor connection events
stock_data_db.on("connected", () => {
  console.log("Connected to stock DB:", stock_data_db.name);
});

stock_data_db.on("error", (err) => {
  console.error("Stock DB connection error:", err);
});

stock_data_db.on("disconnected", () => {
  console.warn("Stock DB disconnected");
});

// Optional: If using Mongoose 7+, you can await the promise
stock_data_db.asPromise().catch((err) => {
  console.error("Initial DB connection error:", err);
});

module.exports = stock_data_db;
