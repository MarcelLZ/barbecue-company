import { Router } from 'express'
import { middleware as body } from 'bodymen'
import token from '../../utils/token-validation'
import { create, update } from './controller'
import User from './model'

const app = new Router()
const { email, password } = User.schema.tree

app.post(
  '/',
  body({ email, password }),
  create
)

app.patch(
  '/me',
  token({ required: true }),
  body({ password }),
  update
)

export { User }
export default app
