'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate ({ User }) {
      Order.belongsTo(User), { foreignKey: 'userId' };
    }
  }
  Order.init(
    {
      // userId: { type: DataTypes.INTEGER, allowNull: false, field: 'user_id' },
    },
    {
      sequelize,
      modelName: 'Order',
      tableName: 'orders',
      underscored: true,
    }
  );
  return Order;
};
