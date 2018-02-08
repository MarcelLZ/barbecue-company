import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'react-mdl'

import style from './navigation-item.styl'

const NavigationIcon = ({ to, icon, description }) => (
  <Link to={to} className={style.item}>
    <Icon name={icon} />
    { description }
  </Link>
)

export default NavigationIcon
