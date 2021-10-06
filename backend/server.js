const express = require("express");

const requests = require("./data/requests");

require("dotenv").config({ path: "../.env" });

const userRoutes = require("./routes/userRoutes");
const app = express();
// const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

// dotenv.config();

connectDB();
app.use(express.json());

// API endpoints - retrieve data
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Retrieve all requests
app.get("/api/requests", (req, res) => {
  res.json(requests);
});

app.use("/api/users", userRoutes);

//middleware
app.use(notFound);
app.use(errorHandler);

// Created the web server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
