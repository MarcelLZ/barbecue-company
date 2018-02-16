import {
  GET_COMPANIES_REQUEST,
  GET_COMPANIES_RESPONSE,
  GET_COMPANIES_ERROR,
  NEW_COMPANY_REQUEST,
  NEW_COMPANY_RESPONSE,
  NEW_COMPANY_ERROR
} from './actions'

const initialState = {
  isFetching: false,
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

    case NEW_COMPANY_REQUEST:
      return {
        ...state,
        isFetching: true
      }

    case NEW_COMPANY_RESPONSE:
      return {
        ...state,
        isFetching: false,
        companies: action.data
      }
    case NEW_COMPANY_ERROR:
      return {
        ...state,
        isFetching: false
      }
  }

  return state
}

export default companies
