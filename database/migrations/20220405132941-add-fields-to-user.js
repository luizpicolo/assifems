'use strict';

module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.addColumn('users', 'email', {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    });
    await queryInterface.addColumn('users', 'password', {
      allowNull: false,
      type: DataTypes.STRING,
    });
    await queryInterface.addColumn('users', 'createdAt', {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.fn('NOW')
    });
    await queryInterface.addColumn('users', 'updatedAt', {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.fn('NOW')
    });
  },

  async down (queryInterface) {
    await queryInterface.removeColumn('users', 'email');
    await queryInterface.removeColumn('users', 'password');
    await queryInterface.removeColumn('users', 'createdAt');
    await queryInterface.removeColumn('users', 'updatedAt');
  }
};
