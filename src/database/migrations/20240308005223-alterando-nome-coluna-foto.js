/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.renameColumn('fotos', 'originalName', 'originalname');
    await queryInterface.renameColumn('fotos', 'fileName', 'filename');
  },

  async down(queryInterface) {
    await queryInterface.renameColumn('fotos', 'originalname', 'originalName');
    await queryInterface.renameColumn('fotos', 'filename', 'fileName');
  },
};
