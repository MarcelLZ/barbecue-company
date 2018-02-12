import React from 'react'
import { Link } from 'react-router-dom'

const TotalOrders = ({ orders, companyId }) =>
  orders.length > 0
    ? (<Link to={`/orders/company/${companyId}`}>{ orders.length }</Link>)
    : <span>Nenhum</span>

export default TotalOrders
