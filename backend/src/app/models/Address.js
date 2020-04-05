import Sequelize, { Model } from 'sequelize'

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        street: Sequelize.STRING,
        number: Sequelize.STRING,
        zipcode: Sequelize.STRING,
        neighborhood: Sequelize.STRING,
      },
      {
        sequelize,
      }
    )

    return this
  }

  static associate(models) {
    this.belongsTo(models.User, { foreginKey: 'user_id', as: 'user' })
  }
}

export default Address
