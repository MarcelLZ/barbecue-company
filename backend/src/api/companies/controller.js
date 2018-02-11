import { success } from '../../services/responses'
import Company from './model'

export const index = (req, res, next) =>
  Company
    .find({})
    .then(success(res))
    .catch(next)

export const create = ({ bodymen: { body } }, res, next) =>
  Company
    .create({ ...body })
    .then(success(res))
    .catch(next)

export const addOrder = async ({ body, params: { id } }, res, next) => {
  let company = await Company.findOne({ _id: id })
  if (!company) throw Error('Company not found')

  company
    .set({ orders: [ ...company.orders, body ] })
    .save()
    .then(success(res))
    .catch(next)
}
