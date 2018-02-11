import { Router } from 'express'
import { middleware as body } from 'bodymen'
import { index, create, addOrder, cancelOrder } from './controller'
import Company, { itemsSchema } from './model'

const app = Router()
const { name, cnpj } = Company.schema.tree

app.get('/', index)
app.post('/', body({ name, cnpj }), create)
app.patch('/:id/order', body({ items: [itemsSchema] }), addOrder)
app.delete('/:id/order/:orderId', cancelOrder)

export default app
