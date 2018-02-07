import React from 'react'
import { Card, CardText } from 'react-mdl'

import LoginForm from './form'

import style from './login.styl'

const Login = () => (
  <div className={style.container}>

    <Card shadow={1}>
      <CardText>
        <LoginForm />
      </CardText>
    </Card>

  </div>
)

export default Login
