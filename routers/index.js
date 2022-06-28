const express = require('express');
const router = express.Router();

const taskRouter = require('./task.router');
const userRouter = require('./user.router');

const orderRouter = express.Router();

router.use('/tasks', taskRouter);
router.use('/users', userRouter);

module.exports = router;
