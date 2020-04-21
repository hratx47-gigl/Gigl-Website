require("dotenv").config();
const createError = require("http-errors");
const logger = require("morgan");
const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
require("./database");

// setup session
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// open up CORS
app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "../public/assets")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/giger*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/indexGig.html"));
});

const gigerRouter = require("./routes/giger");
app.use("/api/giger", gigerRouter);

app.get("/performer*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/indexPerformer.html"));
});

const performerRouter = require("./routes/performer");
app.use("/api/performer", performerRouter);

// You can place your routes here, feel free to refactor:
const example = require("./routes/example");
app.use("/api/example", example);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

module.exports = app;
