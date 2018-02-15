import {
  PROFILE_REQUEST,
  PROFILE_RESPONSE,
  PROFILE_ERROR
} from './actions'

const initialState = {
  isFetching: false
}

const profile = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case PROFILE_RESPONSE:
      return {
        ...state,
        isFetching: false
      }
    case PROFILE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
  }

  return state
}

export default profile
