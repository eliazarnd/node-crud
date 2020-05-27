process.env.NODE_ENV = "production";

const NODE_ENV = process.env.NODE_ENV || "dev";

require("dotenv").config({
  path: `.env.${NODE_ENV}`,
});

const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_HOST_MONGO, { useNewUrlParser: true })
  .then((db) => console.log("Db connected"))
  .catch((err) => console.log(err));
