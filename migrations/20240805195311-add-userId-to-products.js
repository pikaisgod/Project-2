'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Temporarily allow null values
    await queryInterface.addColumn('Products', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });

    // Set default userId for existing records
    const defaultUserId = 1; // Change this to an appropriate value
    await queryInterface.sequelize.query(
      `UPDATE "Products" SET "userId" = ${defaultUserId} WHERE "userId" IS NULL`
    );

    // Change the column to not allow null values
    await queryInterface.changeColumn('Products', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Products', 'userId');
  }
};
