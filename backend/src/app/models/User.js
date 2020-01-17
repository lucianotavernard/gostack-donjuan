import Sequelize, { Model } from 'sequelize'
import { hashSync, compareSync } from 'bcryptjs'
import jwt from 'jsonwebtoken'

import authConfig from '../../config/auth'

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        isAdmin: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    )

    this.addHook('beforeSave', user => {
      if (user.password) user.password_hash = hashSync(user.password, 8)
    })

    return this
  }

  compareHash(password) {
    return compareSync(password, this.password_hash)
  }

  generateToken({ id, isAdmin }) {
    const { secret, ttl } = authConfig

    return jwt.sign({ id, isAdmin }, secret, { expiresIn: ttl })
  }
}

export default User
