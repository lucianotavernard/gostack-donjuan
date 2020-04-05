import Sale from '../models/Sale'
import SaleItem from '../models/SaleItem'
import Address from '../models/Address'

class SaleController {
  async index(req, res) {
    const { id, isAdmin } = req.user

    const sales = await Sale.findAll({
      where: isAdmin ? {} : { userId: id },
      attributes: ['id', 'total', 'note', 'createdAt'],
      include: [
        {
          association: 'user',
        },
        {
          association: 'items',
          attributes: ['id', 'price', 'discount', 'total'],
          include: [
            {
              association: 'type_size',
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
            },
          ],
        },
      ],
      order: [['createdAt', 'DESC']],
    })

    return res.json(sales)
  }

  async show(req, res) {
    const { id } = req.params

    const sales = await Sale.findOne({
      where: { id },
      include: [
        {
          association: 'items',
          attributes: ['id', 'price', 'discount', 'total'],
        },
      ],
    })

    return res.json(sales)
  }

  async store(req, res) {
    const { items, address } = req.body
    const { id: userId } = req.user

    delete req.body.items
    delete req.body.address

    const { id: addressId } = await Address.create({ ...address, userId })

    const sale = await Sale.create({ ...req.body, userId, addressId })

    const saleItems = items.map((item) => ({ ...item, saleId: sale.id }))

    await SaleItem.bulkCreate(saleItems)

    const { id, total, note } = sale

    return res.json({ id, total, note, items })
  }
}

export default new SaleController()
