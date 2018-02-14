import { Router } from 'express'
import auth from './auth'
import signup from './signup'
import companies from './companies'
import orders from './orders'

const router = new Router()

router.use('/auth', auth)
router.use('/signup', signup)
router.use('/companies', companies)
router.use('/orders', orders)

export default router
