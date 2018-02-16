import { success, error } from '../../utils/responses'
import encrypt from '../../utils/encrypt'
import User from './model'

export const create = async ({ body }, res, next) => {
  const { email, password } = body
  const encryptedPassword = encrypt(password)

  let user = await User.find({ email })
  if (user) next(Error('Email already exists.'))

  User
    .create({ email, password: encryptedPassword })
    .then(success(res))
    .catch(error(res))
}

export const update = async ({ body, user }, res, next) => {
  const { email } = user

  let userToUpdate = await User.findOne({ email })
  if (!userToUpdate) throw Error('User not found.')

  const { password } = body
  const encryptedPassword = encrypt(password)

  userToUpdate
    .set({ password: encryptedPassword })
    .save()
    .then(success(res))
    .catch(error(res))
}
