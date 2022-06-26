const { Task } = require('../models');

module.exports.createTask = async (req, res, next) => {
  try {
    const { body } = req;
    const task = await Task.create(body);

    res.send({ data: task });
  } catch (error) {
    next(error);
  }
};

module.exports.findTask = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const task = await Task.findByPk(id);

    res.send({ data: task });
  } catch (error) {
    next(error);
  }
};
module.exports.updateTask = async (req, res, next) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const [rows, [updateTask]] = await Task.update(body, {
      where: { id },
      returning: true,
    });
    if (rows !== 1) {
      throw new Error('Can`t update task');
    }

    res.send({ data: updateTask });
  } catch (error) {
    next(error);
  }
};
module.exports.deleteTask = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const deleteTask = await Task.destroy({
      where: { id },
    });

    if (deleteTask !== 1) {
      throw new Error('Can`t delete task');
    }

    res.send({ data: { id } });
  } catch (error) {
    next(error);
  }
};
