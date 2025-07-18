const mongoose = require("mongoose");
require("dotenv").config({
  path: process.env.NODE_ENV == "test" ? "./.env.test" : "./.env",
});

beforeAll(async () => {
  if (!process.env.Mongo_URI) {
    throw new Error("Mongo URI is not defined");
  }

  await mongoose.connect(process.env.Mongo_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  });
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  if (redis) await redis.quit();
  console.log("DB deleted");
});
