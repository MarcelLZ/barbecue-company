import { Router } from 'express'
import auth from './auth'
import companies from './companies'
import orders from './orders'
import users from './users'

const router = new Router()

router.use('/auth', auth)
router.use('/companies', companies)
router.use('/orders', orders)
router.use('/users', users)

export default router
