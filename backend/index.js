require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bookingRoutes = require("./routes/booking-routes/index");
const app = express();
const PORT = process.env.PORT || 5000;

const MONGO_URI = process.env.MONGO_URI;

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://temple-project-ten.vercel.app"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
app.use(express.json());

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong",
  });
});

// Database connection
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("mongodb is connected successfully"))
  .catch((e) => console.log(e));

// routes configuration

app.use("/book", bookingRoutes);

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
