import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { openModal } from 'redux-flow/ui/reducer'
import { finishOrder } from 'redux-flow/orders/reducer'
import { Button } from 'react-mdl'

import OrderForm from './order-form'
import OrderItem from './order-item'
import AddButton from 'components/add-button'

const NewOrder = ({ orderItems, openModal, finishOrder }) => [
  <OrderForm key='order-form' />,
  <Button
    key='done-button'
    raised colored ripple
    onClick={finishOrder}
  >
    Concluir pedido
  </Button>,
  <OrderItem key='order-item' orderItems={orderItems} />,
  <AddButton key='add-button' onClick={openModal} />
]

const mapStateToProps = ({ orders }) => ({ ...orders })
const mapDispatchToProps = dispatch => bindActionCreators({
  openModal,
  finishOrder
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(NewOrder)
