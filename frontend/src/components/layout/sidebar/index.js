import React from 'react'
import { Drawer, Navigation } from 'react-mdl'

import NavigationItem from './navigation-item'
import Divisor from './divisor'

const Sidebar = () => (
  <Drawer>
    <Navigation>
      <NavigationItem
        to='/'
        icon='home'
        description='Dashboard'
      />

      <NavigationItem
        to='/companies'
        icon='business'
        description='Empresas'
      />

      <NavigationItem
        to='/orders'
        icon='local_shipping'
        description='Pedidos'
      />

      <Divisor />

      <NavigationItem
        to='/usuarios'
        icon='mood'
        description='Usuários'
      />
    </Navigation>
  </Drawer>
)

export default Sidebar
