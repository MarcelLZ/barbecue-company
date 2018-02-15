import { success, error } from '../../utils/responses'
import encrypt from '../../utils/encrypt'
import User from './model'

export const create = ({ body }, res, next) => {
  const { email, password } = body
  const encryptedPassword = encrypt(password)

  User
    .create({ email, password: encryptedPassword })
    .then(success(res))
    .catch(error(res))
}

export const update = async ({ body, user }, res, next) => {
  const { password } = body
  const { email } = user
  const encryptedPassword = encrypt(password)

  let userToUpdate = await User.findOne({ email, password: encryptedPassword })
  if (!userToUpdate) throw Error('User not found.')

  userToUpdate
    .set({ password: encryptedPassword })
    .save()
    .then(success(res))
    .catch(error(res))
}
