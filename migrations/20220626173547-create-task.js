'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      body: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      isDone: {
        field: 'is_done',
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      deadline: {
        type: Sequelize.DATEONLY
      },
      createdAt: {
        field: 'create_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'update_at',
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks');
  }
};