import Sequelize from 'sequelize'

import User from '../app/models/User'
import Address from '../app/models/Address'
import Product from '../app/models/Product'
import Sale from '../app/models/Sale'
import SaleItem from '../app/models/SaleItem'
import Size from '../app/models/Size'
import Type from '../app/models/Type'
import TypeSize from '../app/models/TypeSize'

import databaseConfig from '../config/database'

const models = [User, Address, Product, Sale, SaleItem, Size, Type, TypeSize]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(databaseConfig)

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models))
  }
}

export default new Database()
