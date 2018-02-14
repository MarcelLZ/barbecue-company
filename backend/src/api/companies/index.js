import { Router } from 'express'
import { middleware as body } from 'bodymen'
import token from '../../utils/token-validation'
import { index, create, addOrder, cancelOrder } from './controller'
import Company, { orderSchema } from './model'

const app = Router()
const { name, cnpj } = Company.schema.tree

app.get(
  '/',
  token({ required: true }),
  index
)

app.post(
  '/',
  token({ required: true }),
  body({ name, cnpj }),
  create
)

app.post(
  '/orders',
  token({ required: true }),
  body({ orders: [orderSchema] }),
  addOrder
)

app.delete(
  '/:id/order/:orderId',
  token({ required: true }),
  cancelOrder
)

export { Company }
export default app
