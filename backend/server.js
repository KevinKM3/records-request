const express = require("express");

const requests = require("./data/requests");

require("dotenv").config({ path: "../.env" });

// const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();

// dotenv.config();

connectDB();

// API endpoints - retrieve data
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Retrieve all requests
app.get("/api/requests", (req, res) => {
  res.json(requests);
});

// Created the web server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
