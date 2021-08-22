const express = require("express");
const app = express();

app.use(require("./health"));
app.use(require("./postulant"));
app.use(require("./vacant"));
app.use(require("./postulation"));
app.use(require("./challenger"));
app.use(require("./feedback"));

module.exports = app;
