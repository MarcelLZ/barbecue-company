import { Router } from 'express'
import { index } from './controller'
const app = new Router()

app.get('/', index)
app.get('/company/:id', index)

export default app
