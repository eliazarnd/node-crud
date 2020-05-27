const express = require("express");
const router = express.Router();

const Task = require("../models/task");

router.get("/tasks", async (req, res) => {
  const tasks = await Task.find();

  res.json({
    tasks,
    statusCode: res.statusCode,
    message: "Success Request",
  });
});
//5ecda906ef071322a43b204a
router.get("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);

  res.json({
    task,
    statusCode: res.statusCode,
    message: "Success Request",
  });
});

module.exports = router;
