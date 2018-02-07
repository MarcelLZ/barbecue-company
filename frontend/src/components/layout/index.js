import React from 'react'
import { Link } from 'react-router-dom'
import {
  Layout, Header, Content,
  Navigation
} from 'react-mdl'

const AppLayout = ({ breadcrumb, children }) => (
  <Layout fixedHeader>

    <Header title={<span>{ breadcrumb }</span>}>
      <Navigation>
        <Link to='/'>Dashboard</Link>
        <Link to='/'>Pedidos</Link>
        <Link to='/'>Perfil</Link>
      </Navigation>
    </Header>

    <Content>
      { children }
    </Content>

  </Layout>
)

export default AppLayout
