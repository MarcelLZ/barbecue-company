import { combineReducers } from 'redux'

import ui from './ui'
import companies from './companies'
import orders from './orders'
import profile from './profile'

export default combineReducers({
  ui,
  companies,
  orders,
  profile
})
