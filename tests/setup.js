const mongoose = require("mongoose");
require("dotenv").config({
  path: process.env.NODE_ENV == "test" ? "./.env.test" : "./.env",
});

beforeAll(async () => {
  if (!process.env.MONGO_URI) {
    throw new Error("Mongo URI is not defined");
  }

  await mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4,
    })
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => {
      console.log("Error in monogoDB connection", err.message);
    });
}, 15000);

// afterAll(async () => {
//   await mongoose.connection.dropDatabase();
//   await mongoose.connection.close();
//   //   if (redis) await redis.quit();
//   console.log("DB deleted");
// }, 15000);
