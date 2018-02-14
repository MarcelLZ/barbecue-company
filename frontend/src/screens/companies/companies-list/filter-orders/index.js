import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Icon } from 'react-mdl'

import style from './filter-orders.styl'

const FilterOrders = ({ companyId }) => (
  <Link to={`/orders/${companyId}`} className={style.linkTo}>
    <Icon name='open_in_new' />
  </Link>
)

FilterOrders.propTypes = {
  companyId: PropTypes.string.isRequired
}

export default FilterOrders
