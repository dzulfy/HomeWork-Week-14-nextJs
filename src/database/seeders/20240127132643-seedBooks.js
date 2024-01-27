"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Books", [
      {
        title: "Dilan 1990",
        publisher: "Bandung Mizan Pustaka",
        author: "Pidi Baiq",
        image: "https://elibrary.bsi.ac.id/assets/images/buku/230353.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Mariposa",
        publisher: "Coconut Books",
        author: "Luluk HF",
        image:
          "https://asset-2.tstatic.net/pekanbaru/foto/bank/images/novel-mariposa.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Laskar Pelangi",
        publisher: "Bentang Pustaka",
        author: "Andrea Hirata",
        image:
          "https://upload.wikimedia.org/wikipedia/id/8/8e/Laskar_pelangi_sampul.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
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
    await queryInterface.bulkDelete("Books", null, {});
  },
};
