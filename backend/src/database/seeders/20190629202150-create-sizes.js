module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('sizes', [
      {
        product_id: 1,
        name: 'Pequena',
        photo: '943862354a86e73f117212a10886116f.png',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: 1,
        name: 'Média',
        photo: 'd4348ae7533d2313da14485611d50cd5.png',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: 1,
        name: 'Grande',
        photo: 'a9effcf8e03361bcd0b1e0af734a2951.png',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: 1,
        name: 'Gigante',
        photo: '0bad177cc350314acea7739d52eca46f.png',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: 4,
        name: '350ml',
        photo: '447c39005ecd9646e9e7e95246d08e56.jpg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: 4,
        name: '1L',
        photo: '9be1e950b680f5f83414aca245371280.jpg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: 4,
        name: '1,5L',
        photo: '5885f38c47130bb5aa0ddf11b1e30027.jpg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: 4,
        name: '2L',
        photo: 'a1ebc7d27bdd26fe90b314d8e83c2171.jpg',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ])
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('sizes')
  },
}
