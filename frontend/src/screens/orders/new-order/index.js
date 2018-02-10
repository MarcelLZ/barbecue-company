import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { openModal } from 'redux-flow/ui/reducer'
import { Button } from 'react-mdl'

import OrderForm from './order-form'
import OrderItem from './order-item'
import AddButton from 'components/add-button'

const NewOrder = ({ openModal, orderItems }) => [
  <OrderForm key='order-form' />,
  <Button key='done-button' raised colored ripple>Concluir pedido</Button>,
  <OrderItem key='order-item' orderItems={orderItems} />,
  <AddButton key='add-button' onClick={openModal} />
]

const mapStateToProps = ({ orders }) => ({ ...orders })
const mapDispatchToProps = dispatch => bindActionCreators({ openModal }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(NewOrder)
