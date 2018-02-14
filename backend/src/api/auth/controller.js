import jwt from 'jsonwebtoken'
import { success, notFound, error } from '../../utils/responses'
import config from '../../../config'
import encrypt from '../../utils/encrypt'
import { User } from '../signup'

export const authenticate = ({ body }, res, next) => {
  const { email, password } = body
  const encryptedPassword = encrypt(password)

  const generateToken = ({ _id, email }) =>
    jwt.sign({ _id, email }, config.secretToken, { expiresIn: '1d' })

  User
    .findOne({ email, password: encryptedPassword })
    .then(notFound(res))
    .then(generateToken)
    .then(success(res))
    .catch(error(res))
}
