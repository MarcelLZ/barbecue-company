import React from 'react'
import { Card, CardText } from 'react-mdl'
import { connect } from 'react-redux'

import Loading from 'components/loading'
import LoginForm from './form'
import Notifications from 'components/notifications'

import style from './login.styl'

const Login = ({ isFetching }) => (
  <div>
    <Notifications />
    <Loading fetching={isFetching} />
    <div className={style.container}>
      <Card shadow={1}>
        <CardText>
          <LoginForm />
        </CardText>
      </Card>
    </div>
  </div>
)

const mapStateToProps = ({ login }) => ({ ...login })
export default connect(mapStateToProps)(Login)
