const express = require('express');
const router = express.Router();

const TaskController = require('../controllers/task.controller');
const UserController = require('../controllers/user.controller');
const OrderController = require('../controllers/order.controller');
const { findUser } = require('../middleware/userMW');

router.post('/tasks', TaskController.createTask);
router.get('/tasks/:id', TaskController.findTask);
router.put('/tasks/:id', TaskController.updateTask);
router.delete('/tasks/:id', TaskController.deleteTask);

router.post('/users', UserController.createUser);
router.get('/users/:id', UserController.findUser);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);


router.post('/users/:userId/orders', OrderController.createOrder);
router.post('/users/:id/orders/v2',findUser, OrderController.createMagicOrder);

module.exports = router;
