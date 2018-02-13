import {
  SIGNUP_REQUEST,
  SIGNUP_RESPONSE,
  SIGNUP_ERROR
} from './actions'

const initialState = {
  isFetching: false
}

const signup = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        isFetching: true
      }
    case SIGNUP_RESPONSE:
    case SIGNUP_ERROR:
      return {
        isFetching: false
      }
  }

  return state
}

export default signup
