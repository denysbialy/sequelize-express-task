const express = require('express');
const taskRouter = express.Router();
const TaskController = require('../controllers/task.controller');


taskRouter.post('/', TaskController.createTask);
taskRouter.get('/:id', TaskController.findTask);
taskRouter.put('/:id', TaskController.updateTask);
taskRouter.delete('/:id', TaskController.deleteTask);

module.exports = taskRouter;