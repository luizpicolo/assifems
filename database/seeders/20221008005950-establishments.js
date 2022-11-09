'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('establishments', [
      {
        name: 'Florai',
        cnpj: '741202974',
        address: 'Rua da Saudade',
        addressURL: "link",
        imgURL: "link",
        cell: '9999-9999',
        categoryId: 1
      },
      {
        name: 'Agência W3',
        cnpj: '741202',
        address: 'Rua da Saudade',
        addressURL: "link",
        imgURL: "link",
        cell: '9999-9999',
        categoryId: 2
      } 
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('establishments', null, {});
  }
};
