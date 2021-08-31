const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const modules = require("./module");

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(cookieParser());
app.use(modules);

module.exports = app;
