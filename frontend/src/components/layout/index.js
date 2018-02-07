import React from 'react'
import { Layout, Header, Content } from 'react-mdl'

import Sidebar from './sidebar'

const AppLayout = ({ breadcrumb, children }) => (
  <Layout fixedHeader fixedDrawer>
    <Header title={<span>Barbecue Company</span>} />
    <Sidebar />
    <Content>{ children }</Content>
  </Layout>
)

export default AppLayout
