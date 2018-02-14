import React from 'react'

const TotalOrders = ({ orders, companyId }) =>
  orders.length > 0
    ? (<span>{ orders.length }</span>)
    : (<span>Nenhum</span>)

export default TotalOrders
