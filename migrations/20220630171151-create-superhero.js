'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('superheroes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nickname: {
        allowNull: false,
        type: Sequelize.STRING(128),
        unique: true,
      },
      realName: {
        field: 'real_name',
        allowNull: false,
        type: Sequelize.STRING(128),
      },
      race: {
        allowNull: false,
        type: Sequelize.STRING(128),
      },
      originDesription: {
        field: 'origin_desription',
        allowNull: false,
        type: Sequelize.TEXT,
      },
      catchPhrase: {
        field: 'catch_phrase',
        type: Sequelize.TEXT,
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('superheroes');
  },
};
