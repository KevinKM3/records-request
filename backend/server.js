const express = require("express");

const requests = require("./data/requests");

const dotenv = require("dotenv");

const app = express();

dotenv.config();

// API endpoints - retrieve data
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Retrieve all requests
app.get("/api/requests", (req, res) => {
  res.json(requests);
});

// Retrieve single request
app.get("/api/requests/:id", (req, res) => {
  const request = requests.find((r) => r._id === req.params.id);

  res.send(request);
});

// Created the web server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
