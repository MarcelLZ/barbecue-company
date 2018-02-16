import api from 'utils/api'
import {
  GET_COMPANIES_REQUEST,
  GET_COMPANIES_RESPONSE,
  GET_COMPANIES_ERROR,
  NEW_COMPANY_REQUEST,
  NEW_COMPANY_RESPONSE,
  NEW_COMPANY_ERROR
} from './actions'

export const getAllCompanies = () => dispatch => {
  dispatch({ type: GET_COMPANIES_REQUEST })

  api
    .get('/companies')
    .then(({ data }) => dispatch({
      type: GET_COMPANIES_RESPONSE,
      data
    }))
    .catch(error => dispatch({
      type: GET_COMPANIES_ERROR,
      error
    }))
}

export const newCompany = company => (dispatch, getState) => {
  dispatch({ type: NEW_COMPANY_REQUEST })
  const { companies } = getState()

  return api
    .post('/companies', company)
    .then(({ data }) => {
      dispatch({
        type: NEW_COMPANY_RESPONSE,
        data: [ ...companies.companies, data ]
      })
    })
}

export const newCompanyError = () => dispatch =>
  dispatch({ type: NEW_COMPANY_ERROR })
