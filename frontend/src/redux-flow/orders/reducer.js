// import api from 'utils/api'
import {
  GET_ORDERS_REQUEST,
  GET_ORDERS_RESPONSE,
  GET_ORDERS_ERROR
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
