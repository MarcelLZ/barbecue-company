import { Router } from 'express'
import User from './model'

const app = new Router()

app.patch('/me')

export { User }
export default app
