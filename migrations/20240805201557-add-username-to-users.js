'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // First, add the column allowing null values
    await queryInterface.addColumn('Users', 'username', {
      type: Sequelize.STRING,
      allowNull: true, // Allow null temporarily
    });

    // Then, update existing records with a default username
    await queryInterface.sequelize.query(
      `UPDATE "Users" SET "username" = 'default_username' WHERE "username" IS NULL`
    );

    // Finally, change the column to not allow null values
    await queryInterface.changeColumn('Users', 'username', {
      type: Sequelize.STRING,
      allowNull: false, // Do not allow null values
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'username');
  }
};
