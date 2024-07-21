//Imported modules
const express = require("express");
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require("dotenv"); 

dotenv.config();
const app = express();

//Middleware
app.use(morgan('dev'));




//Routes

//Landing Page
app.get("/", (req, res, next) => {
    res.render("index.ejs");
  });

app.listen(3000, () => {
  console.log("Listening on port 3000");
});