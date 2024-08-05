'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Orders', [
      {
        item: 'Item 1',
        quantity: 10,
        status: 'Pending',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: 'Item 2',
        quantity: 5,
        status: 'Shipped',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        item: 'Item 3',
        quantity: 20,
        status: 'Delivered',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
