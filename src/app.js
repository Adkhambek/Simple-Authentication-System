const express = require("express");
const app = express();
const cors = require("cors");
const modules = require("./module");

app.use(cors());
app.use(express.json());
app.use(modules);

module.exports = app;
