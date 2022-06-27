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
      },
      lastName: {
        field: 'last_name',
        allowNull: false,
        type: DataTypes.STRING(128),
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(256),
      },
      isMale: {
        field: 'is_male',
        type: DataTypes.BOOLEAN,
      },
      birthday: {
        type: DataTypes.DATEONLY,
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
