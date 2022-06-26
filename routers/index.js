const express = require('express');
const router = express.Router();

const TaskController = require('../controllers/task.controller');

router.post('/tasks', TaskController.createTask);
router.get('/tasks/:id', TaskController.findTask);
router.put('/tasks/:id', TaskController.updateTask);
router.delete('/tasks/:id', TaskController.deleteTask);

module.exports = router;
