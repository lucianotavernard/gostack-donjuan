module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('products', [
      {
        name: 'Pizzas',
        description:
          'Mais de 50 sabores de pizza em até 4 tamanhos diferentes de fome.',
        photo: '06e1b46313e6d2eedc6bb6260ba9de6a.png',
        updated_at: new Date(),
        created_at: new Date(),
      },
      {
        name: 'Massas',
        description:
          '10 tipos de massas com diferentes molhos para te satisfazer.',
        photo: 'd13cd54e4f8e4a84d21361a95705e042.png',
        updated_at: new Date(),
        created_at: new Date(),
      },
      {
        name: 'Calzones',
        description:
          'Calzones super recheados com mais de 50 sabores diferentes.',
        photo: 'b77c5b234b40690234eb3c92456baee0.png',
        updated_at: new Date(),
        created_at: new Date(),
      },
      {
        name: 'Bebidas não-alcóolicas',
        description: 'Refrigerantes, sucos, chá gelado, energéticos e água.',
        photo: '715d0ec360ac89d9abe33f7f2404aa38.png',
        updated_at: new Date(),
        created_at: new Date(),
      },
      {
        name: 'Bebidas alcóolicas',
        description: 'Cervejas artesanais, vinhos e destilados.',
        photo: '3b76b4b181548314a2b85a6a76b32058.png',
        updated_at: new Date(),
        created_at: new Date(),
      },
    ])
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('products')
  },
}
