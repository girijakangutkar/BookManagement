const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then(() => {
    console.log(`DB connected ${process.env.MONGO_URI}`);
  })
  .catch((err) => {
    console.log("Error while connecting to the DB");
  });
