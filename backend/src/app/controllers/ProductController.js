import Product from '../models/Product'

class ProductController {
  async index(req, res) {
    const products = await Product.findAll({
      attributes: ['id', 'name', 'description', 'photo'],
    })

    return res.json(products)
  }

  async store(req, res) {
    const { filename } = req.file

    if (!req.file) {
      return res.status(400).json({ error: 'Product image is required' })
    }

    const product = await Product.create({ ...req.body, photo: filename })

    return res.json(product)
  }
}

export default new ProductController()
