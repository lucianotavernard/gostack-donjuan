import Sequelize, { Model } from 'sequelize'

class Sale extends Model {
  static init(sequelize) {
    super.init(
      {
        note: Sequelize.STRING,
        total: Sequelize.DECIMAL,
      },
      {
        sequelize,
      }
    )

    return this
  }

  static associate(models) {
    this.belongsTo(models.User, { foreginKey: 'user_id', as: 'user' })
    this.belongsTo(models.Address, { foreginKey: 'address_id', as: 'address' })
    this.hasMany(models.SaleItem, { as: 'items' })
  }
}

export default Sale
