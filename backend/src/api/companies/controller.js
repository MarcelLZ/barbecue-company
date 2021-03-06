import { success, error } from '../../utils/responses'
import Company from './model'

export const index = ({ user }, res, next) =>
  Company
    .find({ user })
    .then(success(res))
    .catch(error(res))

export const create = ({ bodymen: { body }, user }, res, next) =>
  Company
    .create({ ...body, user: user._id })
    .then(success(res))
    .catch(error(res))

export const addOrder = async ({ body }, res, next) => {
  const { orders } = body

  const toCompany = async (order) => {
    let company = await Company.findOne({ _id: order.company })
    if (!company) throw Error(`Company '${order.company}' not found`)

    const { orders } = company
    return company
      .set({ orders: [{ items: order.items }, ...orders] })
      .save()
  }

  let updates = orders.map(toCompany)
  Promise
    .all(updates)
    .then(success(res))
    .catch(error(res))
}

export const cancelOrder = async ({ params: { id, orderId } }, res, next) => {
  let company = await Company.findOne({ _id: id })
  if (!company) throw Error(`Company '${id}' not found`)

  company
    .set({ orders: company.orders.filter(order => order._id.toString() !== orderId) })
    .save()
    .then(success(res))
    .catch(error(res))
}
