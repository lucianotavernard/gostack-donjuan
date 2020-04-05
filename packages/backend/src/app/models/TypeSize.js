import Sequelize, { Model } from 'sequelize'

class TypeSize extends Model {
  static init(sequelize) {
    super.init(
      {
        price: Sequelize.DECIMAL,
      },
      {
        sequelize,
        tableName: 'types_sizes',
      }
    )

    return this
  }

  static associate(models) {
    this.belongsTo(models.Type, { foreginKey: 'type_id', as: 'type' })
    this.belongsTo(models.Size, { foreginKey: 'size_id', as: 'size' })
  }
}

export default TypeSize
