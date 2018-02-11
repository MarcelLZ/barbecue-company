import api from 'utils/api'
import {
  GET_ORDERS_REQUEST,
  GET_ORDERS_RESPONSE,
  GET_ORDERS_ERROR,
  ADD_ORDER_ITEM,
  REMOVE_ORDER_ITEM,
  FINISH_ORDER
} from './actions'

export const getAllOrders = () => dispatch => {
  dispatch({ type: GET_ORDERS_REQUEST })

  setTimeout(() => {
    dispatch({
      type: GET_ORDERS_RESPONSE,
      data: [
        {
          _id: '1',
          orderCode: 654406,
          company: '',
          orderItems: [
            { description: 'Carvão', quantity: 2 },
            { description: 'Cerveja', quantity: 20 },
            { description: 'Carne', quantity: 2 },
            { description: 'Guardanapo', quantity: 1 }
          ]
        },
        {
          _id: '2',
          orderCode: 346753,
          company: '',
          orderItems: [
            { description: 'Cerveja', quantity: 10 },
            { description: 'Carvão', quantity: 1 },
            { description: 'Guardanapo', quantity: 10 },
            { description: 'Carne', quantity: 1 }
          ]
        }
      ]
    })
  }, 2000)

  // api
  //   .get('/orders')
  //   .then(orders => dispatch({
  //     type: GET_ORDERS_RESPONSE,
  //     data: orders
  //   }))
  //   .catch(error => dispatch({
  //     type: GET_ORDERS_ERROR,
  //     error
  //   }))
}

export const addOrderItem = item => (dispatch, getState) => {
  const { orders } = getState()

  dispatch({
    type: ADD_ORDER_ITEM,
    data: [ ...orders.orderItems, item ]
  })
}

export const removeOrderItem = itemId => (dispatch, getState) => {
  const { orders } = getState()
  const orderItems = orders.orderItems.filter(
    item => itemId !== item.id
  )

  dispatch({
    type: REMOVE_ORDER_ITEM,
    data: orderItems
  })
}

export const finishOrder = () => (dispatch, getState) => {
  const { orders } = getState()

  let companyOrders = orders.orderItems.map(order => ({
    company: order.company,
    items: [{ description: order.description, quantity: order.quantity }]
  }))

  api
    .post('/companies/orders', { orders: companyOrders })
    .then(() => dispatch({ type: FINISH_ORDER }))
}
