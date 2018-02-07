import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Index from 'screens/index'

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path='/' component={Index} />
    </React.Fragment>
  </Router>
)

export default App
