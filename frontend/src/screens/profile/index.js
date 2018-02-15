import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

import { SessionStorage } from 'utils/storage'
import AppLayout from 'components/layout'
import ProfileForm from './form'

class Profile extends Component {
  constructor () {
    super()
    this.state = {
      email: ''
    }
  }

  componentDidMount () {
    this.setState({
      email: SessionStorage.get('USER')
    })
  }

  render () {
    const { email } = this.state

    return (
      <AppLayout>
        <Grid>
          <Cell col={12}>
            <p>Altere os dados da sua conta.</p>
            <strong>{ email }</strong>
            <hr />

            <ProfileForm />
          </Cell>
        </Grid>
      </AppLayout>
    )
  }
}

export default Profile
