import { success, error } from '../../utils/responses'
import encrypt from '../../utils/encrypt'
import User from './model'

export const create = async ({ body }, res, next) => {
  try {
    const { email, password } = body
    const encryptedPassword = encrypt(password)

    let user = await User.findOne({ email })
    if (user) throw Error('Email já cadastrado.')

    await User.create({ email, password: encryptedPassword })
    success(res, 204)()
  } catch (e) {
    error(res)(e)
  }
}

export const update = async ({ body, user }, res, next) => {
  const { email } = user

  let userToUpdate = await User.findOne({ email })
  if (!userToUpdate) throw Error('Usuário não existe.')

  const { password } = body
  const encryptedPassword = encrypt(password)

  userToUpdate
    .set({ password: encryptedPassword })
    .save()
    .then(success(res))
    .catch(error(res))
}
