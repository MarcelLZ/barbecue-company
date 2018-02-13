import React from 'react'
import { Card, CardText } from 'react-mdl'

import SignupForm from './form'

import style from './new-account.styl'

const Signup = () => (
  <div className={style.container}>
    <Card shadow={1}>
      <CardText>
        <SignupForm />
      </CardText>
    </Card>
  </div>
)

export default Signup
