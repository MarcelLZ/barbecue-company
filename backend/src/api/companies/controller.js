import { success } from '../../services/responses'
import Company from './model'

export const getAll = (req, res, next) =>
  Company
    .find({})
    .then(success(res))
    .catch(next)

export const create = ({ bodymen: { body } }, res, next) =>
  Company
    .create({ ...body })
    .then(success(res))
    .catch(next)
