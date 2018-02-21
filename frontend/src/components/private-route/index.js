import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import { SessionStorage } from 'utils/storage'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const hasToken = SessionStorage.get('TOKEN') || false

  return (
    <Route {...rest} render={props => (
      hasToken
        ? (<Component {...props} />)
        : (<Redirect to='/' />)
    )} />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired
}

export default PrivateRoute
