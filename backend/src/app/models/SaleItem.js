import Sequelize, { Model } from 'sequelize'

class SaleItem extends Model {
  static init(sequelize) {
    super.init(
      {
        price: Sequelize.DECIMAL,
        amount: Sequelize.INTEGER,
        discount: Sequelize.DECIMAL,
        total: Sequelize.DECIMAL,
      },
      {
        sequelize,
        tableName: 'sales_items',
      }
    )

    return this
  }

  static associate(models) {
    this.belongsTo(models.Sale, { foreginKey: 'sale_id', as: 'sale' })
    this.belongsTo(models.TypeSize, {
      foreginKey: 'type_size_id',
      as: 'type_size',
    })
  }
}

export default SaleItem
