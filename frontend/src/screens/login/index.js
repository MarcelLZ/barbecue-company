import React from 'react'
import { Card, CardText } from 'react-mdl'
import { connect } from 'react-redux'

import Loading from 'components/loading'
import LoginForm from './form'

import style from './login.styl'

const Login = ({ isFetching }) => [
  <Loading key='loading' fetching={isFetching} />,
  <div key='login' className={style.container}>
    <Card shadow={1}>
      <CardText>
        <LoginForm />
      </CardText>
    </Card>
  </div>
]

const mapStateToProps = ({ login }) => ({ ...login })
export default connect(mapStateToProps)(Login)
