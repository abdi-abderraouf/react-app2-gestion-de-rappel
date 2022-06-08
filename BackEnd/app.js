// app.js

const express = require("express");

var cors = require("cors");
const mongoose = require("mongoose");

// routes
const rappels = require("./routes/api/rappels");

const app = express();

// Connect Database
mongoose.connect("mongodb://localhost:27017/mongorappel");
console.log("data base mongorappel is connected");

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Hello world!"));

// use Routes
app.use("/api/rappels", rappels);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
