"use strict";

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("associates", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      birth_date: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      role: {
        allowNull: false,
        unique: false,
        type: DataTypes.STRING,
      },
      cpf: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      rg: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      validity: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      siape: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      photoURL: {
        allowNull: true,
        unique: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.fn("NOW"),
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.fn("NOW"),
      },
    });
  },
  down: async (queryInterface) => {
    return await queryInterface.dropTable("associates");
  },
};
