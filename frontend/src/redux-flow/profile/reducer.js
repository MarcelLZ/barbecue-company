import api from 'utils/api'
import {
  PROFILE_REQUEST,
  PROFILE_RESPONSE,
  PROFILE_ERROR
} from './actions'

export const updateProfile = password => dispatch => {
  dispatch({ type: PROFILE_REQUEST })

  return api
    .patch('/me', { password })
    .then(() => dispatch({ type: PROFILE_RESPONSE }))
    .catch(error => dispatch({
      type: PROFILE_ERROR,
      error
    }))
}
