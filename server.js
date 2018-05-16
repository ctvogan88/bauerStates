const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const db = require("./models");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bauerDB");

app.post("/api/bauers", (req, res) => {
  db.Bauer
    .create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

app.get("/api/bauers", (req, res) => {
  db.Bauer
    .find({})
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});