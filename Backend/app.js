const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello budddy");
});

module.exports = app;
