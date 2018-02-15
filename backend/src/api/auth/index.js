import { Router } from 'express'
import { middleware as body } from 'bodymen'
import { authenticate } from './controller'
import { User } from '../users'

const app = new Router()
const { user, password } = User.schema.tree

app.post('/', body({ user, password }), authenticate)

export default app
