import { createHmac } from 'crypto'
import config from '../../../config'
import { success, error } from '../../utils/responses'
import User from './model'

export const create = ({ body }, res, next) => {
  const { email, password } = body
  const encryptedPassword = createHmac('sha256', config.secretToken)
    .update(password)
    .digest('hex')

  User
    .create({ email, password: encryptedPassword })
    .then(success(res))
    .catch(error(res))
}
