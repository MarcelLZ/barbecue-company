import {
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  LOGIN_ERROR
} from './actions'

const initialState = {
  isFetching: false
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case LOGIN_RESPONSE:
    case LOGIN_ERROR:
      return {
        ...state,
        isFetching: false
      }
  }
}

export default login
