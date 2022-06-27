const createError = require('http-errors');
const { User } = require('../models');

module.exports.createUser = async (req, res, next) => {
  const { body } = req;
  const user = await User.create(body);

  if (!user) {
    return next(createError(409, 'Can`t create user'));
  }
  res.send({ data: user });
};

module.exports.findUser = async (req, res, next) => {
  const {
    params: { id },
  } = req;
  const user = await User.findByPk(id);

  if (!user) {
    return next(createError(404, 'User not found'));
  }
  res.send({ data: user });
};

module.exports.updateUser = async (req, res, next) => {
  const {
    params: { id },
    body,
  } = req;
  const userUpdate = await User.update(body, {
    where: { id },
    returning: true,
  });

  //   if (!user) {
  //     return next(createError(404, 'User not found'));
  //   }
  res.send({ data: userUpdate });
};

module.exports.deleteUser = async (req, res, next) => {
  const {
    params: { id },
  } = req;
  const deleteUser = await User.destroy({
    where: { id },
  });

  //   if (!user) {
  //     return next(createError(404, 'User not found'));
  //   }
  res.send({ data: deleteUser });
};
