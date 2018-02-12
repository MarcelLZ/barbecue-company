import React from 'react'
import { IconButton } from 'react-mdl'

const OrderActions = ({ cancelOrder }) =>
  <IconButton name='remove_shopping_cart' onClick={cancelOrder} />

export default OrderActions
