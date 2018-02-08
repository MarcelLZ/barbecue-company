import { combineReducers } from 'redux'

import ui from './ui'
import companies from './companies'

export default combineReducers({
  ui,
  companies
})
