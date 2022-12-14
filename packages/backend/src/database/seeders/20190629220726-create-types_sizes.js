module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('types_sizes', [
      {
        type_id: 1,
        size_id: 1,
        price: 29.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 1,
        size_id: 2,
        price: 42.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 1,
        size_id: 3,
        price: 59.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 1,
        size_id: 4,
        price: 76.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 2,
        size_id: 1,
        price: 27.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 2,
        size_id: 2,
        price: 35.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 2,
        size_id: 3,
        price: 54.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 2,
        size_id: 4,
        price: 65.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 3,
        size_id: 1,
        price: 22.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 3,
        size_id: 2,
        price: 27.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 3,
        size_id: 3,
        price: 35.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 3,
        size_id: 4,
        price: 45.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 4,
        size_id: 1,
        price: 22.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 4,
        size_id: 2,
        price: 27.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 4,
        size_id: 3,
        price: 35.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 4,
        size_id: 4,
        price: 45.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 5,
        size_id: 1,
        price: 29.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 5,
        size_id: 2,
        price: 42.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 5,
        size_id: 3,
        price: 59.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 5,
        size_id: 4,
        price: 76.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 6,
        size_id: 1,
        price: 27.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 6,
        size_id: 2,
        price: 35.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 6,
        size_id: 3,
        price: 54.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 6,
        size_id: 4,
        price: 65.0,
        created_at: new Date(),
        updated_at: new Date(),
      },

      {
        type_id: 7,
        size_id: 5,
        price: 3.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 7,
        size_id: 6,
        price: 4.5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 7,
        size_id: 7,
        price: 5.5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 7,
        size_id: 8,
        price: 7.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 8,
        size_id: 5,
        price: 3.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 8,
        size_id: 6,
        price: 4.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 8,
        size_id: 7,
        price: 5.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 8,
        size_id: 8,
        price: 6.0,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ])
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('types_sizes')
  },
}
