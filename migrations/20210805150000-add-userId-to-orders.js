'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Orders', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: true, // Temporarily allow null for existing rows
      references: {
        model: 'Users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });

    // Optionally, update existing rows to have a valid userId
    // await queryInterface.sequelize.query(`
    //   UPDATE "Orders" SET "userId" = 1 WHERE "userId" IS NULL;
    // `);

    // Change the column to disallow null values
    await queryInterface.changeColumn('Orders', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Orders', 'userId');
  }
};
