"use strict";

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.addColumn("users", "role", {
      allowNull: false,
      type: DataTypes.STRING,
    });
    await queryInterface.addColumn("users", "cpf", {
      allowNull: false,
      type: DataTypes.STRING,
    });
    await queryInterface.addColumn("users", "rg", {
      allowNull: false,
      type: DataTypes.STRING,
    });
    await queryInterface.addColumn("users", "status", {
      allowNull: false,
      type: DataTypes.STRING,
    });
    await queryInterface.addColumn("users", "validity", {
      allowNull: false,
      type: DataTypes.DATE,
    });
    await queryInterface.addColumn("users", "siape", {
      allowNull: false,
      type: DataTypes.STRING,
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn("users", "role");
    await queryInterface.removeColumn("users", "cpf");
    await queryInterface.removeColumn("users", "rg");
    await queryInterface.removeColumn("users", "status");
    await queryInterface.removeColumn("users", "validity");
    await queryInterface.removeColumn("users", "siape");
  },
};
