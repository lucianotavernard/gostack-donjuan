import Type from '../models/Type'
import Size from '../models/Size'
import TypeSize from '../models/TypeSize'

class TypeSizeController {
  async index(req, res) {
    const { typeId } = req.params

    const sizes = await TypeSize.findAll({
      where: { type_id: typeId },
      attributes: ['id', 'price'],
      include: [
        {
          association: 'type',
          attributes: ['id', 'name', 'photo', 'url'],
        },
        {
          association: 'size',
          attributes: ['id', 'name', 'photo', 'url'],
        },
      ],
    })

    return res.json(sizes)
  }

  async store(req, res) {
    const { price } = req.body
    const { typeId, sizeId } = req.params

    const typeExists = await Type.findByPk(typeId)
    if (!typeExists) return res.status(400).json({ error: 'Type not found' })

    const sizeExists = await Size.findByPk(sizeId)
    if (!sizeExists) return res.status(400).json({ error: 'Size not found' })

    const typeSize = await TypeSize.create({
      type_id: typeId,
      size_id: sizeId,
      price,
    })

    return res.json(typeSize)
  }
}

export default new TypeSizeController()
