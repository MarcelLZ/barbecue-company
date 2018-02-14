import { Router } from 'express'
import token from '../../utils/token-validation'
import { index } from './controller'
const app = new Router()

app.get(
  '/',
  token({ required: true }),
  index
)

app.get(
  '/company/:id',
  token({ required: true }),
  index
)

export default app
