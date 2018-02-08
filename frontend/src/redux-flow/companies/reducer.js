// import api from 'utils/api'
import {
  GET_COMPANIES_REQUEST,
  GET_COMPANIES_RESPONSE,
  GET_COMPANIES_ERROR
} from './actions'

export const getAllCompanies = () => dispatch => {
  dispatch({ type: GET_COMPANIES_REQUEST })

  setTimeout(() => {
    dispatch({
      type: GET_COMPANIES_RESPONSE,
      data: [
        { _id: 1, name: 'Druptec Soluções', cnpj: '28.354.669/0001-09', totalOrders: 2 },
        { _id: 2, name: 'BRFoods', cnpj: '35.577.109/0001-70', totalOrders: 1 },
        { _id: 3, name: 'PasquePag', cnpj: '34.763.818/0001-88', totalOrders: 2 }
      ]
    })
  }, 2000)

  // api
  //   .get('/companies')
  //   .then(companies => dispatch({
  //     type: GET_COMPANIES_RESPONSE,
  //     data: companies
  //   }))
  //   .catch(error => dispatch({
  //     type: GET_COMPANIES_ERROR,
  //     error
  //   }))
}
