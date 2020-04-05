import Size from '../models/Size'
import Product from '../models/Product'

class SizeController {
  async index(req, res) {
    const { id } = req.params

    const sizes = await Size.findAll({
      where: { product_id: id },
      attributes: ['id', 'name', 'photo', 'url'],
    })

    return res.json(sizes)
  }

  async store(req, res) {
    const { id } = req.params
    const { filename } = req.file

    if (!req.file) {
      return res.status(400).json({ error: 'Product size image is required' })
    }

    if (await Product.findByPk(id)) {
      return res.status(400).json({ error: 'Product not found' })
    }

    const size = await Size.create({
      ...req.body,
      product_id: id,
      photo: filename,
    })

    return res.json(size)
  }
}

export default new SizeController()
