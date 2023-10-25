const taskModel = require("../models/taskModel");
const mongoose = require("mongoose");

exports.getTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred while fetching todos." });
  }
};

exports.addTask = async (req, res) => {
  const { taskName, check } = req.body;

  try {
    const task = await taskModel.create({ taskName, check });
    res.status(200).json(task);
  } catch (err) {
    res.status(400);
    res.json({ err: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid task ID format" });
    }

    const deletedTask = await taskModel.findOneAndDelete({ _id: id });

    if (!deletedTask) {
      return res.status(404).json({ error: "Task not found" });
    }

    return res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error while deleting task:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid task ID format" });
    }

    const updatedTask = await taskModel.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    );

    if (!updatedTask) {
      return res.status(404).json({ error: "Task not found" });
    }
    return res.status(200).json({ message: "Task updated successfully" });
  } catch (error) {
    console.error("Error while updating task:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// exports.checkTask = async (req, res) => {
//   const { id } = req.params;

//   //checking if the _id is valid or not
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ err: "No such todo" });
//   }

//   //updating the checked property of todo
//   const todo = await taskModel.findOneAndUpdate(
//     { _id: id },
//     { checked: req.body.checked }
//   );

//   if (!todo) {
//     return res.status(404).json({ err: "No such todo" });
//   }

//   res.status(200).json(todo);
// };
