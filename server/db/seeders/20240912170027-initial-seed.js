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
        housingType: 'Квартира',
      },
      {
        housingType: 'Дом',
      },
      {
        housingType: 'Комната',
      },
    ]);

    await queryInterface.bulkInsert('Advertisements', [
      {
        typeId: 1,
        price: 55000,
        photo: 'apartment1.jpg',
        phone: '+79991112234',
        description: 'Современная квартира в центре города с видом на парк.',
        coordinatesX: '55.7558',
        coordinatesY: '37.6176',
      },
      {
        typeId: 1,
        price: 45000,
        photo: 'apartment2.jpg',
        phone: '+79991112235',
        description: 'Уютная квартира с двумя спальнями в тихом районе.',
        coordinatesX: '55.7559',
        coordinatesY: '37.6177',
      },
      {
        typeId: 1,
        price: 60000,
        photo: 'apartment3.jpg',
        phone: '+79991112236',
        description: 'Просторная квартира с ремонтом в новостройке.',
        coordinatesX: '55.7560',
        coordinatesY: '37.6178',
      },
      {
        typeId: 1,
        price: 50000,
        photo: 'apartment4.jpg',
        phone: '+79991112237',
        description: 'Квартира с балконом и видом на реку.',
        coordinatesX: '55.7561',
        coordinatesY: '37.6179',
      },
      {
        typeId: 1,
        price: 52000,
        photo: 'apartment5.jpg',
        phone: '+79991112238',
        description: 'Комфортная квартира с хорошей транспортной доступностью.',
        coordinatesX: '55.7562',
        coordinatesY: '37.6180',
      },
      {
        typeId: 2,
        price: 300000,
        photo: 'house1.jpg',
        phone: '+79992223345',
        description: 'Большой дом с участком и садом, отличное место для семьи.',
        coordinatesX: '55.7570',
        coordinatesY: '37.6181',
      },
      {
        typeId: 2,
        price: 350000,
        photo: 'house2.jpg',
        phone: '+79992223346',
        description: 'Роскошный дом с бассейном и гостевой зоной.',
        coordinatesX: '55.7571',
        coordinatesY: '37.6182',
      },
      {
        typeId: 2,
        price: 280000,
        photo: 'house3.jpg',
        phone: '+79992223347',
        description: 'Дом в экологически чистом районе с рядом удобств.',
        coordinatesX: '55.7572',
        coordinatesY: '37.6183',
      },
      {
        typeId: 2,
        price: 320000,
        photo: 'house4.jpg',
        phone: '+79992223348',
        description: 'Современный дом с большой террасой и зоной BBQ.',
        coordinatesX: '55.7573',
        coordinatesY: '37.6184',
      },
      {
        typeId: 2,
        price: 310000,
        photo: 'house5.jpg',
        phone: '+79992223349',
        description: 'Уютный дом с просторными комнатами и гаражом.',
        coordinatesX: '55.7574',
        coordinatesY: '37.6185',
      },
      {
        typeId: 3,
        price: 12000,
        photo: 'room1.jpg',
        phone: '+79993334456',
        description: 'Комната в общежитии, рядом с университетом.',
        coordinatesX: '55.7580',
        coordinatesY: '37.6190',
      },
      {
        typeId: 3,
        price: 15000,
        photo: 'room2.jpg',
        phone: '+79993334457',
        description: 'Уютная комната с удобствами в квартире.',
        coordinatesX: '55.7581',
        coordinatesY: '37.6191',
      },
      {
        typeId: 3,
        price: 13000,
        photo: 'room3.jpg',
        phone: '+79993334458',
        description: 'Комната в квартире с хорошим ремонтом.',
        coordinatesX: '55.7582',
        coordinatesY: '37.6192',
      },
      {
        typeId: 3,
        price: 14000,
        photo: 'room4.jpg',
        phone: '+79993334459',
        description: 'Просторная комната в квартире с отдельным входом.',
        coordinatesX: '55.7583',
        coordinatesY: '37.6193',
      },
      {
        typeId: 3,
        price: 11000,
        photo: 'room5.jpg',
        phone: '+79993334460',
        description: 'Комната с хорошим освещением и мебелью.',
        coordinatesX: '55.7584',
        coordinatesY: '37.6194',
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
