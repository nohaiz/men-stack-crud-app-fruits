const express = require("express");
const morgan = require('morgan');
const mongoose = require('mongoose');

const dotenv = require("dotenv"); 
dotenv.config();

const app = express();
app.use(morgan('dev'));





app.get("/", async (req, res) => {
    res.render("index.ejs");
  });

app.listen(3000, () => {
  console.log("Listening on port 3000");
});