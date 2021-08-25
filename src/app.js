const express = require("express");
const app = express();
const modules = require("./module");

app.use(express.json());
app.use(modules);

module.exports = app;
