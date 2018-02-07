import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Login from 'screens/login'
import NewAccount from 'screens/new-account'

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path='/' component={Login} />
      <Route path='/new-account' component={NewAccount} />
    </React.Fragment>
  </Router>
)

export default App
