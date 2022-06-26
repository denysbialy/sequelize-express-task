'use strict';
const { Model } = require('sequelize');
const { isBefore } = require('date-fns');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate (models) {}
  }
  Task.init(
    {
      body: {
        type: DataTypes.STRING(128),
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      isDone: {
        field: 'is_done',
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notNull: true,
        },
      },
      deadline: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: true,
          notEarlierToday: value => {
            if (isBefore(new Date(value), new Date())) {
              throw new Error(
                'The note cannot be created before the current date'
              );
            }
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Task',
      tableName: 'tasks',
      underscored: true,
    }
  );
  return Task;
};
