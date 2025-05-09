require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// CORS setup
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://your-frontend-domain.com"]
    : ["http://localhost:5174"]; // Or other local environments

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// // MongoDB connection
// const investment_data_db = mongoose.createConnection(
//   process.env.DATABASE_URL_INVESTMENT_DATA
// );

// investment_data_db
//   .asPromise()
//   .then(() => {
//     console.log("MongoDB connected to:", investment_data_db.name);
//   })
//   .catch((err) => {
//     console.error("MongoDB connection error:", err);
//   });

// const stock_data_db = mongoose.createConnection(
//   process.env.DATABASE_URL_STOCK_DATA
// );

// stock_data_db
//   .asPromise()
//   .then(() => {
//     console.log("MongoDB connected to:", stock_data_db.name);
//   })
//   .catch((err) => {
//     console.error("MongoDB connection error:", err);
//   });

// const macroeconomic_data_db = mongoose.createConnection(
//   process.env.DATABASE_URL_MACROECONOMIC_DATA
// );

// macroeconomic_data_db
//   .asPromise()
//   .then(() => {
//     console.log("MongoDB connected to:", macroeconomic_data_db.name);
//   })
//   .catch((err) => {
//     console.error("MongoDB connection error:", err);
//   });

// Middleware
app.use(express.json()); // Accept JSON from body in POST requests

// Routes
const notesRouter = require("./routes/notes");
const profilesRouter = require("./routes/profiles");
const treasuryRatesRouter = require("./routes/treasuryRates");

app.use("/notes", notesRouter);
app.use("/profiles", profilesRouter);
app.use("/treasury-rates", treasuryRatesRouter);

// Error handling
app.use((req, res, next) => {
  res.status(404).json({ message: "Not Found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start the server
app.listen(3000, () => console.log("Server started on port 3000"));
