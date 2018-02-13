import { Router } from 'express'
import { middleware as body } from 'bodymen'
import { create } from './controller'
import User from './model'

const app = new Router()
const { email, password } = User.schema.tree

app.post('/', body({ email, password }), create)

export default app
