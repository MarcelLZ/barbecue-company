import {
  GET_ORDERS_REQUEST,
  GET_ORDERS_RESPONSE,
  GET_ORDERS_ERROR
} from './actions'

const initialState = {
  isFetching: false,
  hasError: false,
  errorMessage: '',
  orders: []
}

const orders = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case GET_ORDERS_RESPONSE:
      return {
        ...state,
        isFetching: false,
        orders: action.data
      }
    case GET_ORDERS_ERROR:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        errorMessage: action.error.message
      }
  }

  return state
}

export default orders
