const express = require("express");
const UserRouter = require("./routes/UserRouter");
const BookRouter = require("./routes/BookRouter");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const app = express();
require("dotenv").config({
  path: process.env.NODE_ENV == "test" ? ".env.test" : ".env",
});

if (process.env.NODE_ENV !== "test") {
  require("./config/db");
}

console.log("ENV file in work is:", process.env.NODE_ENV);

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Book Management is working fine" });
});

app.use("/api", UserRouter);

app.use("/app", BookRouter);

if (process.env.NODE_ENV !== "test") {
  app.listen(3000, () => {
    console.log("Sever is running");
  });
}

module.exports = app;
