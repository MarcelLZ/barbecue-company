import { Router } from 'express'
import { middleware as body } from 'bodymen'
import { index, create, addOrder, cancelOrder } from './controller'
import Company, { orderSchema } from './model'

const app = Router()
const { name, cnpj } = Company.schema.tree

app.get('/', index)
app.post('/', body({ name, cnpj }), create)
app.post('/orders', body({ orders: [orderSchema] }), addOrder)
app.delete('/:id/order/:orderId', cancelOrder)

export { Company }
export default app
