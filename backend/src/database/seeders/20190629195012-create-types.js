module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('types', [
      {
        product_id: 1,
        name: 'Portuguesa',
        photo: '2fd97e5755875247b683e9b64021c74e.png',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: 1,
        name: 'Calabresa',
        photo: '7f39f6b98143b48e115a68b0720304ad.png',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: 1,
        name: 'Frango Frito',
        photo: 'f382ae1ea3d32b19807d3b6c21610970.png',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: 1,
        name: 'Marguerita',
        photo: 'be26005f5bd6fe79792fe3060dc47e63.png',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: 1,
        name: 'Vegetariana',
        photo: '8d6fb6fcb75205f63576275b091c8010.png',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: 1,
        name: '4 Queijos',
        photo: 'f3253bf35c74db814be31f2079775e26.png',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: 4,
        name: 'Cola Cola',
        photo: '7b7538a1476af0140f4da757ec27a066.jpg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: 4,
        name: 'Guaraná Antartica',
        photo: '6edce512227e46e08afba98b601c5bef.jpg',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ])
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('types')
  },
}
