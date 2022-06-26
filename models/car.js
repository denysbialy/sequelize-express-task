'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  Car.init(
    {
      carName: {
        field: 'car_name',
        type: DataTypes.STRING(64),
        allowNull: false,
      },
      carModel: {
        field: 'car_model',
        type: DataTypes.STRING(64),
        allowNull: false,
      },
      carManufacturer: {
        field: 'car_manufacturer',
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      yearOfIssue: {
        field: 'year_of_issue',
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Car',
      underscored: true,
      tableName: 'cars',
    }
  );
  return Car;
};
