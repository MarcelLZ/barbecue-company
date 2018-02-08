import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Login from 'screens/login'
import NewAccount from 'screens/new-account'
import Dashborad from 'screens/dashboard'

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path='/' component={Login} />
      <Route path='/new-account' component={NewAccount} />
      <Route path='/dashboard' component={Dashborad} />
    </React.Fragment>
  </Router>
)

export default App
