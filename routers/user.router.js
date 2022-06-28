const express = require('express');
const userRouter = express.Router();
const UserController = require('../controllers/user.controller');
const OrderController = require('../controllers/order.controller');
const { findUser } = require('../middleware/userMW');

userRouter.post('/', UserController.createUser);
userRouter.get('/:id', UserController.findUser);
userRouter.put('/:id', UserController.updateUser);
userRouter.delete('/:id', UserController.deleteUser);

userRouter.post('/:userId/orders', OrderController.createOrder);
userRouter.post('/:id/orders/v2', findUser, OrderController.createMagicOrder);

module.exports = userRouter;