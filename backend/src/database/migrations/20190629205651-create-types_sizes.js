module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('types_sizes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'types',
          key: 'id',
        },
      },
      size_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'sizes',
          key: 'id',
        },
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },

  down: queryInterface => {
    return queryInterface.dropTable('types_sizes')
  },
}
