import jwt from 'jsonwebtoken'
import { success, error } from '../../utils/responses'
import config from '../../../config'
import encrypt from '../../utils/encrypt'
import { User } from '../users'

const generateToken = (payload) =>
  jwt.sign(payload, config.secretToken, { expiresIn: '1d' })

export const authenticate = async ({ body }, res, next) => {
  try {
    const { email, password } = body
    const encryptedPassword = encrypt(password)

    let user = await User.findOne({ email, password: encryptedPassword })
    if (!user) throw Error('Usuário não encontrado.')

    success(res)({ token: generateToken({ _id: user._id, email }), email })
  } catch (message) {
    error(res, 400)(message)
  }
}
