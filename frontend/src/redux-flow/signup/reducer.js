import api from 'utils/api'
import {
  SIGNUP_REQUEST,
  SIGNUP_RESPONSE,
  SIGNUP_ERROR
} from './actions'

export const signup = (email, password) => dispatch => {
  dispatch({ type: SIGNUP_REQUEST })

  return api
    .post('/users', { email, password })
    .then(() => dispatch({ type: SIGNUP_RESPONSE }))
}

export const signupError = () => dispatch => {
  dispatch({ type: SIGNUP_ERROR })
}
