import { combineReducers } from 'redux'

import ui from './ui'
import companies from './companies'
import orders from './orders'

export default combineReducers({
  ui,
  companies,
  orders
})
