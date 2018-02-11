import { Router } from 'express'
import companies from './companies'
import orders from './orders'

const router = new Router()

router.use('/companies', companies)
router.use('/orders', orders)

export default router
