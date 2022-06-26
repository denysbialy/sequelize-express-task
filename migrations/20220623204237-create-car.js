'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      carName: {
        field: 'car_name',
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      carModel: {
        field: 'car_model',
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      carManufacturer: {
        field: 'car_manufacturer',
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      yearOfIssue: {
        field: 'year_of_issue',
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: 'update_at',
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('cars');
  },
};
