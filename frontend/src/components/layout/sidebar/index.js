import React from 'react'
import { Drawer, Navigation } from 'react-mdl'

import NavigationItem from './navigation-item'
import Divisor from './divisor'

const Sidebar = () => (
  <Drawer>
    <Navigation>
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
        to='/profile'
        icon='mood'
        description='Minha conta'
      />
    </Navigation>
  </Drawer>
)

export default Sidebar
