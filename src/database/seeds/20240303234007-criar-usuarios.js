const bcryptjs = require('bcryptjs');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [{
      nome: 'Talles 1',
      email: 'tallesrafa1@gmail.com',
      password_hash: await bcryptjs.hashSync('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Talles 2',
      email: 'tallesrafa2@gmail.com',
      password_hash: await bcryptjs.hashSync('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Talles 3',
      email: 'tallesrafa3@gmail.com',
      password_hash: await bcryptjs.hashSync('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  down() {},
};
