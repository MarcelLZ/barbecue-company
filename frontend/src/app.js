import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import PrivateRoute from 'components/private-route'
import Login from 'screens/login'
import Signup from 'screens/signup'
import Dashborad from 'screens/dashboard'
import Companies from 'screens/companies'
import Orders from 'screens/orders'
import Profile from 'screens/profile'

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path='/' component={Login} />
      <Route path='/signup' component={Signup} />
      <PrivateRoute path='/dashboard' component={Dashborad} />
      <PrivateRoute path='/companies' component={Companies} />
      <PrivateRoute path='/orders/:companyId?' component={Orders} />
      <PrivateRoute path='/profile' component={Profile} />
    </React.Fragment>
  </Router>
)

export default App
