const express = require("express");
const path = require("path");

const app = express();

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../app/views"));

//info middlewares
app.use(express.urlencoded({extended:false}));

module.exports = app;