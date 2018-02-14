import api from 'utils/api'
import {
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  LOGIN_ERROR
} from './actions'

export const login = (email, password) => dispatch => {
  dispatch({ type: LOGIN_REQUEST })

  return api
    .post('/auth', { email, password })
    .then(({ data }) => {
      dispatch({ type: LOGIN_RESPONSE })
      return data
    })
    .catch(error => dispatch({
      type: LOGIN_ERROR,
      error
    }))
}
