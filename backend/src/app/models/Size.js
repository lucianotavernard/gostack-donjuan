import Sequelize, { Model } from 'sequelize'

class Size extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        photo: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3333/files/${this.photo}`
          },
        },
      },
      {
        sequelize,
      }
    )

    return this
  }

  static associate(models) {
    this.belongsTo(models.Product, { foreginKey: 'product_id', as: 'product' })
  }
}

export default Size
