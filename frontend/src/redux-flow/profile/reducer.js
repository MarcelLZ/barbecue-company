import api from 'utils/api'
import {
  PROFILE_REQUEST,
  PROFILE_RESPONSE,
  PROFILE_ERROR
} from './actions'

export const updateProfile = password => dispatch => {
  dispatch({ type: PROFILE_REQUEST })

  return api
    .patch('/users/me', { password })
    .then(() => dispatch({ type: PROFILE_RESPONSE }))
}

export const updateProfileError = () => dispatch =>
  dispatch({ type: PROFILE_ERROR })
