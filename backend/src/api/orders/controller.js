import { success, error } from '../../utils/responses'
import { Company } from '../companies'

export const index = ({ params: { id } }, res, next) => {
  getOrders(id && { _id: id })
    .then(success(res))
    .catch(error(res))
}

const getOrders = async filter => {
  let companies = await Company.find(filter)
  if (!companies) return

  return companies.reduce((prev, company) => {
    let companyId = company._id
    let companyName = company.name

    let orderInfos = company.orders.map(order => ({
      identifiers: { orderId: order._id, companyId },
      code: order.code,
      company: companyName,
      items: order.items
    }))

    return [ ...prev, ...orderInfos ]
  }, [])
}
