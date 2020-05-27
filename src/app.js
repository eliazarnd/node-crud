require("dotenv").config();
require("./database");
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();

// getting routes
const indexRoutes = require("./routes/index");

// getting routes for API
const apiRoutes = require("./routes/apiRoutes");

// settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/", indexRoutes);
app.use("/api/v1", apiRoutes);

// starting the server
app.listen(app.get("port"), () => {
  console.log("Server on port ", app.get("port"));
});
