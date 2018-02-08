import { OPEN_MODAL, CLOSE_MODAL } from './actions'

const initialState = {
  show: false
}

const ui = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        show: true
      }
    case CLOSE_MODAL:
      return {
        ...state,
        show: false
      }
  }

  return state
}

export default ui
