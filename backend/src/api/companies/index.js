import { Router } from 'express'
import { middleware as body } from 'bodymen'
import { getAll, create } from './controller'
import User from './model'

const app = Router()
const { name, cnpj } = User.schema.tree

app.get('/', getAll)
app.post('/', body({ name, cnpj }), create)

export default app
