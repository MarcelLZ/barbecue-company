import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Login from 'screens/login'
import NewAccount from 'screens/new-account'
import Dashborad from 'screens/dashboard'
import Companies from 'screens/companies'
import Orders from 'screens/orders'
import Profile from 'screens/profile'

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path='/' component={Login} />
      <Route path='/new-account' component={NewAccount} />
      <Route path='/dashboard' component={Dashborad} />
      <Route path='/companies' component={Companies} />
      <Route path='/orders/:companyId?' component={Orders} />
      <Route path='/profile' component={Profile} />
    </React.Fragment>
  </Router>
)

export default App
