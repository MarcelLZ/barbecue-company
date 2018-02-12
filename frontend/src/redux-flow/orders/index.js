import {
  GET_ORDERS_REQUEST,
  GET_ORDERS_RESPONSE,
  GET_ORDERS_ERROR,
  ADD_ORDER_ITEM,
  REMOVE_ORDER_ITEM,
  FINISH_ORDER,
  CANCEL_ORDER_REQUEST,
  CANCEL_ORDER_RESPONSE
} from './actions'

const initialState = {
  isFetching: false,
  hasError: false,
  errorMessage: '',
  orders: [],
  items: []
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

    case ADD_ORDER_ITEM:
    case REMOVE_ORDER_ITEM:
      return {
        ...state,
        items: action.data
      }
    case FINISH_ORDER:
      return {
        ...state,
        items: []
      }

    case CANCEL_ORDER_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case CANCEL_ORDER_RESPONSE:
      return {
        ...state,
        isFetching: false,
        orders: action.data
      }
  }

  return state
}

export default orders
