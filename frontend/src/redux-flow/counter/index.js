import { UPDATE_DATE } from './actions'

const initialState = {
  now: Date()
}

const counter = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DATE:
      return {
        ...state,
        now: action.payload
      }
  }

  return state
}

export default counter
