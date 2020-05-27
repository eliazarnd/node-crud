const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//This is a schema for my product
const TaskSchema = new Schema({
  title: String,
  description: String,
  status: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("tasks", TaskSchema);
