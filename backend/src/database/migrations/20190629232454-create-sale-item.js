module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sales_items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sale_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'sales',
          key: 'id',
        },
      },
      type_size_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'types_sizes',
          key: 'id',
        },
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
      },
      amount: {
        allowNull: true,
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      discount: {
        type: Sequelize.DECIMAL(10, 2),
      },
      total: {
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

  down: (queryInterface) => {
    return queryInterface.dropTable('sales_items')
  },
}
