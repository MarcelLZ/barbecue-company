import { Router } from 'express'
import { middleware as body } from 'bodymen'
import { index, create } from './controller'
import User from './model'

const app = Router()
const { name, cnpj } = User.schema.tree

app.get('/', index)
app.post('/', body({ name, cnpj }), create)

export default app
