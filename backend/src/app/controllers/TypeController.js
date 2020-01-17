import Type from '../models/Type'
import Product from '../models/Product'

class TypeController {
  async index(req, res) {
    const { id } = req.params

    const types = await Type.findAll({
      where: { product_id: id },
      attributes: ['id', 'name', 'photo'],
    })

    return res.json(types)
  }

  async store(req, res) {
    const { id } = req.params
    const { filename } = req.file

    if (!req.file) {
      return res.status(400).json({ error: 'Product type image is required' })
    }

    if (await Product.findByPk(id)) {
      return res.status(400).json({ error: 'Product not found' })
    }

    const type = await Type.create({
      ...req.body,
      product_id: id,
      photo: filename,
    })

    return res.json(type)
  }
}

export default new TypeController()
