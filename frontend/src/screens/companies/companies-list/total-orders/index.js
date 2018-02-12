import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'react-mdl'

import style from './total-orders.styl'

const TotalOrders = ({ orders, companyId }) =>
  orders.length > 0
    ? (
      <Link to={`/orders/${companyId}`} className={style.linkTo}>
        { orders.length } <Icon name='open_in_new' />
      </Link>
    ) : <span>Nenhum</span>

export default TotalOrders
