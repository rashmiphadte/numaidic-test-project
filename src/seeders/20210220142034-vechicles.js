'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

   await queryInterface.bulkInsert('Vechicles', [
      {latitude: 18.6035983, longitude:73.7576216, time:'2018-09-09 09:00:26+05:30', license:'ADTEST1', model: 'MITSUBISHI', engine:'1DZ0037452', chasis: '839F23-23616'}
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
