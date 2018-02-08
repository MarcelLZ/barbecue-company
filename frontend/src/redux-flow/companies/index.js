import {
  GET_COMPANIES_REQUEST,
  GET_COMPANIES_RESPONSE,
  GET_COMPANIES_ERROR,
  NEW_COMPANY
} from './actions'

const initialState = {
  isFetching: false,
  isNew: false,
  hasError: false,
  errorMessage: '',
  companies: []
}

const companies = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANIES_REQUEST:
      return {
        ...state,
        isFetching: true
      }

    case GET_COMPANIES_RESPONSE:
      return {
        ...state,
        isFetching: false,
        companies: action.data
      }

    case GET_COMPANIES_ERROR:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        errorMessage: action.error.message
      }

    case NEW_COMPANY:
      return {
        ...state,
        isNew: true
      }
  }

  return state
}

export default companies
