import React from 'react'
import { Grid, Cell } from 'react-mdl'

import AppLayout from 'components/layout'

const Profile = () => (
  <AppLayout>
    <Grid>
      <Cell col={12}>
        <p>Altere os dados da sua conta.</p>
      </Cell>
    </Grid>
  </AppLayout>
)

export default Profile
