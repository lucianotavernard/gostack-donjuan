import User from '../models/User'

class UserController {
  async store(req, res) {
    const { email } = req.body

    if (await User.findOne({ where: { email } })) {
      return res.status(400).json({ error: 'User already exists' })
    }

    const { id, name } = await User.create(req.body)

    return res.json({ id, name, email })
  }
}

export default new UserController()
