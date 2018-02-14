import React from 'react'
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

export default PrivateRoute
