const createError = require('http-errors');
const { User } = require('../models');

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;
    const user = await User.create(body);
    const er = createError(409, 'Can`t create user');
    if (!user) {
      return next(createError(409, 'Can`t create user'));
    }
    user.password = undefined;
    res.send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.findUser = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const user = await User.findByPk(id);

    if (!user) {
      return next(createError(404, 'User not found'));
    }
    user.password = undefined;
    res.send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const userUpdate = await User.update(body, {
      where: { id },
      returning: true,
    });

    if (!user) {
      return next(createError(404, 'User not found'));
    }
    user.password = undefined;
    res.send({ data: userUpdate });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const deleteUser = await User.destroy({
      where: { id },
    });

    if (!deleteUser) {
      return next(createError(404, 'User not found'));
    }
    res.send({ data: deleteUser });
  } catch (error) {
    next(error);
  }
};
