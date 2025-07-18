const express = require("express");
const UserRouter = require("./routes/UserRouter");
const BookRouter = require("./routes/BookRouter");
const app = express();
require("dotenv").config({
  path: process.env.NODE_ENV == "test" ? "./.env.test" : "./.env",
});

if (process.env.NODE_ENV !== "test") {
  require("./config/db");
}

console.log(process.env.NODE_ENV);

app.use(express.json());

app.use("/api", UserRouter);

app.use("/app", BookRouter);

if (process.env.NODE_ENV !== "test") {
  app.listen(3000, () => {
    console.log("Sever is running");
  });
}

module.exports = app;
