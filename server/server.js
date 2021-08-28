require("./config/config");

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(require("./routes/index"));

// habilitar folder public
// app.use(express.static(path.resolve(__dirname, "../public")));

const startServer = () => {
  console.log(`server start port : ${process.env.PORT}`);
};

const conf = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
};

mongoose.connect(process.env.URLDB, conf, (err, resp) => {
  if (err) throw err;

  console.log("base de datos online");
});

app.listen(process.env.PORT, startServer);
app.timeout = 900;
