'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superhero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  Superhero.init(
    {
      nickname: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(128),
        validate: {
          notEmpty: true,
          notNull: true,
          isAlphanumeric: true,
        },
      },
      realName: {
        field: 'real_name',
        allowNull: false,
        type: DataTypes.STRING(128),
        validate: {
          notEmpty: true,
          notNull: true,
          is: /^[A-Z][a-z]{1,}[ ][A-Z][a-z]{1,}\w/i,
        },
      },
      race: {
        allowNull: false,
        type: DataTypes.STRING(128),
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      originDescription: {
        field: 'origin_desription',
        allowNull: false,
        type: DataTypes.TEXT,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      catchPhrase: {
        field: 'catch_phrase',
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Superhero',
      underscored: true,
      tableName: 'superheroes',
    }
  );
  return Superhero;
};
