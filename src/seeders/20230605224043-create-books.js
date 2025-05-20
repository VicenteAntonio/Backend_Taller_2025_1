"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("books", [
      {
        name: "Harry Potter y la Piedra Filosofal",
        author: "J.K. Rowling",
        price: 12_000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Percy Jackson y el Ladrón del Rayo",
        author: "Rick Riordan",
        price: 7_000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "El Señor de los Anillos: La Comunidad del Anillo",
        author: "J.R.R. Tolkien",
        price: 15_000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cien Años de Soledad",
        author: "Gabriel García Márquez",
        price: 13_500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Don Quijote de la Mancha",
        author: "Miguel de Cervantes",
        price: 9_800,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "1984",
        author: "George Orwell",
        price: 8_900,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Crimen y Castigo",
        author: "Fiódor Dostoyevski",
        price: 11_200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "El Principito",
        author: "Antoine de Saint-Exupéry",
        price: 6_500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "La Odisea",
        author: "Homero",
        price: 10_300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Matar a un Ruiseñor",
        author: "Harper Lee",
        price: 9_200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Orgullo y Prejuicio",
        author: "Jane Austen",
        price: 8_700,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "El Gran Gatsby",
        author: "F. Scott Fitzgerald",
        price: 7_800,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Drácula",
        author: "Bram Stoker",
        price: 10_500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Los Miserables",
        author: "Victor Hugo",
        price: 14_200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "La Metamorfosis",
        author: "Franz Kafka",
        price: 7_300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "El Hobbit",
        author: "J.R.R. Tolkien",
        price: 11_800,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Moby Dick",
        author: "Herman Melville",
        price: 12_700,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fahrenheit 451",
        author: "Ray Bradbury",
        price: 8_500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "La Sombra del Viento",
        author: "Carlos Ruiz Zafón",
        price: 10_900,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Crónica de una Muerte Anunciada",
        author: "Gabriel García Márquez",
        price: 9_600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("books", null, {});
  },
};
