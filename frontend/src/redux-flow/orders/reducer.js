import api from 'utils/api'
import transformOrderRequest from 'utils/transform-order-request'
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

export const getAllOrders = companyId => dispatch => {
  dispatch({ type: GET_ORDERS_REQUEST })

  let promise = companyId
    ? api.get(`/orders/company/${companyId}`)
    : api.get('/orders')

  promise
    .then(({ data }) => dispatch({
      type: GET_ORDERS_RESPONSE,
      data
    }))
    .catch(error => dispatch({
      type: GET_ORDERS_ERROR,
      error
    }))
}

export const addOrderItem = item => (dispatch, getState) => {
  const { orders } = getState()

  dispatch({
    type: ADD_ORDER_ITEM,
    data: [ ...orders.items, item ]
  })
}

export const removeOrderItem = itemId => (dispatch, getState) => {
  const { orders } = getState()
  const orderItems = orders.items.filter(
    item => itemId !== item.id
  )

  dispatch({
    type: REMOVE_ORDER_ITEM,
    data: orderItems
  })
}

export const finishOrder = () => (dispatch, getState) => {
  const { orders } = getState()
  const companyOrders = transformOrderRequest(orders.items)

  return api
    .post('/companies/orders', { orders: companyOrders })
    .then(() => dispatch({ type: FINISH_ORDER }))
}

export const cancelOrder = (companyId, orderId) => (dispatch, getState) => {
  dispatch({ type: CANCEL_ORDER_REQUEST })

  const { orders } = getState()
  const filteredOrders = orders.orders.filter(
    order => order.identifiers.orderId !== orderId
  )

  return api
    .delete(`/companies/${companyId}/order/${orderId}`)
    .then(() => dispatch({
      type: CANCEL_ORDER_RESPONSE,
      data: filteredOrders
    }))
}
