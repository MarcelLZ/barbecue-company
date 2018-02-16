import api from 'utils/api'
import { SessionStorage } from 'utils/storage'
import {
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  LOGIN_ERROR
} from './actions'

const saveUser = ({ token, email }) => {
  SessionStorage.save('TOKEN', token)
  SessionStorage.save('USER', email)
}

export const login = (email, password) => dispatch => {
  dispatch({ type: LOGIN_REQUEST })

  api
    .post('/auth', { email, password })
    .then(({ data }) => saveUser(data))
    .then(() => dispatch({ type: LOGIN_RESPONSE }))
}

export const loginError = error => dispatch => {
  dispatch({ type: LOGIN_ERROR, error })
}
