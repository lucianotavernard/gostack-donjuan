import User from '../models/User'

class SessionController {
  async store(req, res) {
    const { email, password } = req.body

    const user = await User.findOne({
      where: req.headers.ADMIN ? { email, isAdmin: true } : { email },
    })

    if (!user) return res.status(400).json({ error: 'User not found' })

    if (!user.compareHash(password)) {
      return res.status(400).json({ error: 'Invalid password' })
    }

    const { id, name, isAdmin } = user

    return res.json({
      user: { id, name, email, isAdmin },
      token: user.generateToken(user),
    })
  }
}

export default new SessionController()
