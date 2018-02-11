import React from 'react'
import { Link } from 'react-router-dom'

const TotalOrders = ({ orders }) =>
  orders.length > 0
    ? (<Link to='/'>{ orders.length }</Link>)
    : <span>Nenhum</span>

export default TotalOrders
