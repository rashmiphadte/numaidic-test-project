'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Vechicles', {
      /*id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },*/
      latitude: {
        type: Sequelize.DECIMAL
      },
      longitude: {
        type: Sequelize.DECIMAL
      },
      time: {
        type: Sequelize.DATE
      },
      license: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      engine: {
        type: Sequelize.STRING
      },
      chasis: {
        type: Sequelize.STRING
      },
      /*createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }*/
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Vechicles');
  }
};