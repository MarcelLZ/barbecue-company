import React from 'react'
import { Card, CardText } from 'react-mdl'

import NewAccountForm from './form'

import style from './new-account.styl'

const NewAccount = () => (
  <div className={style.container}>
    <Card shadow={1}>
      <CardText>
        <NewAccountForm />
      </CardText>
    </Card>
  </div>
)

export default NewAccount
