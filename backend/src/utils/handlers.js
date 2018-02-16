import { error } from './responses'

export const errorHandler = (payload, req, res, next) => {
  error(res)(payload)
}
