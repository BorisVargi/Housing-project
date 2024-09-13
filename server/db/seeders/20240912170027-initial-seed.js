/* eslint-disable no-unused-vars */
/* eslint-disable lines-around-directive */
'use strict';
// const { User, TypeBuild, Advertisement, Favorite } = require('../models');
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Наталья',
        email: 'natalya_admin@example.com',
        phone: '+79991112233',
        password: await bcrypt.hash('123', 3),
        isAdmin: true,
      },
      {
        name: 'Алексей',
        email: 'alexey@example.com',
        phone: '+79992223344',
        password: await bcrypt.hash('321', 3),
        isAdmin: false,
      },
      {
        name: 'Мария',
        email: 'maria@example.com',
        phone: '+79993334455',
        password: await bcrypt.hash('456', 3),
        isAdmin: false,
      },
      {
        name: 'Иван',
        email: 'ivan@example.com',
        phone: '+79994445566',
        password: await bcrypt.hash('654', 3),
        isAdmin: false,
      },
      {
        name: 'Ольга',
        email: 'olga@example.com',
        phone: '+79995556677',
        password: await bcrypt.hash('789', 3),
        isAdmin: false,
      },
      {
        name: 'Павел',
        email: 'pavel@example.com',
        phone: '+79996667788',
        password: await bcrypt.hash('987', 3),
        isAdmin: false,
      },
    ]);

    await queryInterface.bulkInsert('HousingTypes', [
      {
        type: 'Квартира',
      },
      {
        type: 'Дом',
      },
      {
        type: 'Комната',
      },
    ]);

    await queryInterface.bulkInsert('Advertisments', [
      {
        typeId: 1,
        price: 55000,
        photo: 'apartment1.jpg',
        description: 'Современная квартира в центре города с видом на парк.',
      },
      {
        typeId: 1,
        price: 45000,
        photo: 'apartment2.jpg',
        description: 'Уютная квартира с двумя спальнями в тихом районе.',
      },
      {
        typeId: 1,
        price: 60000,
        photo: 'apartment3.jpg',
        description: 'Просторная квартира с ремонтом в новостройке.',
      },
      {
        typeId: 1,
        price: 50000,
        photo: 'apartment4.jpg',
        description: 'Квартира с балконом и видом на реку.',
      },
      {
        typeId: 1,
        price: 52000,
        photo: 'apartment5.jpg',
        description: 'Комфортная квартира с хорошей транспортной доступностью.',
      },
      {
        typeId: 2,
        price: 300000,
        photo: 'house1.jpg',
        description: 'Большой дом с участком и садом, отличное место для семьи.',
      },
      {
        typeId: 2,
        price: 350000,
        photo: 'house2.jpg',
        description: 'Роскошный дом с бассейном и гостевой зоной.',
      },
      {
        typeId: 2,
        price: 280000,
        photo: 'house3.jpg',
        description: 'Дом в экологически чистом районе с рядом удобств.',
      },
      {
        typeId: 2,
        price: 320000,
        photo: 'house4.jpg',
        description: 'Современный дом с большой террасой и зоной BBQ.',
      },
      {
        typeId: 2,
        price: 310000,
        photo: 'house5.jpg',
        description: 'Уютный дом с просторными комнатами и гаражом.',
      },
      {
        typeId: 3,
        price: 12000,
        photo: 'room1.jpg',
        description: 'Комната в общежитии, рядом с университетом.',
      },
      {
        typeId: 3,
        price: 15000,
        photo: 'room2.jpg',
        description: 'Уютная комната с удобствами в квартире.',
      },
      {
        typeId: 3,
        price: 13000,
        photo: 'room3.jpg',
        description: 'Комната в квартире с хорошим ремонтом.',
      },
      {
        typeId: 3,
        price: 14000,
        photo: 'room4.jpg',
        description: 'Просторная комната в квартире с отдельным входом.',
      },
      {
        typeId: 3,
        price: 11000,
        photo: 'room5.jpg',
        description: 'Комната с хорошим освещением и мебелью.',
      },
    ]);

    await queryInterface.bulkInsert('Favourites', [
      {
        userId: 1,
        advertismentId: 1,
      },
      {
        userId: 1,
        advertismentId: 2,
      },
      {
        userId: 1,
        advertismentId: 3,
      },
      {
        userId: 2,
        advertismentId: 4,
      },
      {
        userId: 2,
        advertismentId: 5,
      },
      {
        userId: 2,
        advertismentId: 6,
      },
      {
        userId: 3,
        advertismentId: 7,
      },
      {
        userId: 3,
        advertismentId: 8,
      },
      {
        userId: 3,
        advertismentId: 9,
      },
      {
        userId: 4,
        advertismentId: 1,
      },
      {
        userId: 4,
        advertismentId: 4,
      },
      {
        userId: 4,
        advertismentId: 7,
      },
      {
        userId: 5,
        advertismentId: 2,
      },
      {
        userId: 5,
        advertismentId: 5,
      },
      {
        userId: 5,
        advertismentId: 8,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
