import Sequelize, { Model } from 'sequelize'

class Type extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        photo: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${process.env.APP_URL}/files/${this.photo}`
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

export default Type
