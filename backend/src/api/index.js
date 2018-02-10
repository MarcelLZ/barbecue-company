import { Router } from 'express'
import companies from './companies'

const router = new Router()

router.use('/companies', companies)

export default router
