import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { openModal } from 'redux-flow/ui/reducer'
import { finishOrder } from 'redux-flow/orders/reducer'
import { Button } from 'react-mdl'

import OrderForm from './order-form'
import OrderItem from './order-item'
import AddButton from 'components/add-button'

import style from './new-order.styl'

const NewOrder = ({ items, openModal, finishOrder }) => (
  <React.Fragment>
    <OrderForm key='order-form' />

    <div className={style.finishOrder}>
      <Button
        key='done-button'
        raised colored ripple
        onClick={finishOrder}
      >
        Concluir pedido
      </Button>
    </div>

    <OrderItem key='order-item' items={items} />
    <AddButton key='add-button' onClick={openModal} />
  </React.Fragment>
)

const mapStateToProps = ({ orders }) => ({ ...orders })
const mapDispatchToProps = dispatch => bindActionCreators({
  openModal,
  finishOrder
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(NewOrder)
