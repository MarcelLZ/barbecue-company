import React from 'react'

import Loading from 'components/loading'
import AppLayout from 'components/layout'

const Dashboard = ({ isFetching = false }) => [
  <Loading key='loading' fetching={isFetching} />,
  <AppLayout key='dashboard'>
    Dashboard
  </AppLayout>
]

export default Dashboard
