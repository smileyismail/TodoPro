const express = require("express");

const taskController = require("../controllers/taskController");

const router = express.Router();

router.get("/getTasks", taskController.getTasks);

router.post("/addTask", taskController.addTask);

router.delete("/deleteTask/:id", taskController.deleteTask);

router.put("/updateTask/:id", taskController.updateTask);

// router.put("/checkTask/:id", taskController.checkTask);

module.exports = router;
