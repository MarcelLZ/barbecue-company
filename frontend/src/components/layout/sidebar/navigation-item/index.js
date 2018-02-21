import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Icon } from 'react-mdl'

import style from './navigation-item.styl'

const NavigationIcon = ({ to, icon, description }) => (
  <Link to={to} className={style.item}>
    <Icon name={icon} />
    { description }
  </Link>
)

NavigationIcon.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default NavigationIcon
