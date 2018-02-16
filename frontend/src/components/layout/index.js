import React from 'react'
import { Layout, Header, Content } from 'react-mdl'

import Notifications from 'components/notifications'
import Sidebar from './sidebar'

const AppLayout = ({ breadcrumb, children }) => (
  <Layout fixedHeader fixedDrawer>
    <Notifications />
    <Header title={<span>Barbecue Company</span>} />
    <Sidebar />
    <Content>{ children }</Content>
  </Layout>
)

export default AppLayout
