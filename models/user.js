'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate ({ Order }) {
      User.hasMany(Order, { foreignKey: 'userId' });
    }
  }
  User.init(
    {
      firstName: {
        field: 'first_name',
        allowNull: false,
        type: DataTypes.STRING(128),
        validate: {
          notEmpty: true,
          notNull: true,
          isAlpha: true,
        },
      },
      lastName: {
        field: 'last_name',
        allowNull: false,
        type: DataTypes.STRING(128),
        validate: {
          notEmpty: true,
          notNull: true,
          isAlpha: true,
        },
      },

      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.TEXT,
        validate: {
          notEmpty: true,
          notNull: true,
          isEmail: true,
        },
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(256),
        validate: {
          is: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/i,
          notEmpty: true,
          notNull: true,
        },
      },
      isMale: {
        field: 'is_male',
        type: DataTypes.BOOLEAN,
        validate: {
          notEmpty: true,
        },
      },
      birthday: {
        type: DataTypes.DATEONLY,
        validate: {
          notEmpty: true,
          isDate: true,
          isValidDate: value => {
            if (isAfter(new Date(value), new Date())) {
              throw new Error('Bad date');
            }
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      underscored: true,
    }
  );
  return User;
};
