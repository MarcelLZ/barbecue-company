import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Login from 'screens/login'

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path='/' component={Login} />
    </React.Fragment>
  </Router>
)

export default App
