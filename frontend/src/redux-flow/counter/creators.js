import { UPDATE_DATE } from './actions'

export const updateDate = () => dispatch => {
  dispatch({
    type: UPDATE_DATE,
    payload: Date()
  })
}
