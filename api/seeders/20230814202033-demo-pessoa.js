'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Pessoas', [
        {
       nome: 'anderson',
       ativo: true,
       email:'andi@gmail.com',
       role: 'estudante',
       createdAt: new Date(),
       updatedAt: new Date(),
      },
      {
        nome: 'valdecir',
        ativo: true,
        email:'val@val.com',
        role: 'professor',
        createdAt: new Date(),
        updatedAt: new Date(),
       },
       {
        nome: 'marilene',
        ativo: true,
        email:'mari@mari.com',
        role: 'professor',
        createdAt: new Date(),
        updatedAt: new Date(),
       },
       {
        nome: 'rambo',
        ativo: true,
        email:'rambo@rambo.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
       },
       {
        nome: 'marcelo',
        ativo: true,
        email:'marcelo@marcelo.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
       },
       {
        nome: 'cirino',
        ativo: true,
        email:'ciro@ciro.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
       },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Pessoas', null, {});
     
  }
};
