import { Router } from 'express'
import { getAllCompanies } from './controller'

const app = Router()

app.get('/', getAllCompanies)

export default app
