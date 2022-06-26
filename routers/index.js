const express = require('express');
const router = express.Router();

const TaskController = require('../controllers/task.controller');

router.get('/tasks', TaskController.createTask);

module.exports = router;
