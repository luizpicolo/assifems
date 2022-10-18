'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('establishments', [
      {name: 'florai',
    cnpj: '741202974',
    address: 'rua da saudade',
    categoryId: 1
    },
    {name: 'W3',
    cnpj: '741202',
    address: 'rua da saudade',
    categoryId: 2
    }
     
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('establishments', null, {});
  }
};
