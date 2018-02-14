import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { openModal } from 'redux-flow/ui/reducer'
import { Button } from 'react-mdl'

import OrderForm from './order-form'
import OrderItem from './order-item'
import AddButton from 'components/add-button'

import style from './new-order.styl'

const NewOrder = ({ items, openModal, onFinishOrders }) => (
  <React.Fragment>
    <OrderForm key='order-form' />

    <div className={style.finishOrder}>
      <Button raised colored ripple onClick={onFinishOrders}>
        Concluir pedido
      </Button>
    </div>

    <OrderItem items={items} />
    <AddButton onClick={openModal} />
  </React.Fragment>
)

const mapStateToProps = ({ orders }) => ({ ...orders })
const mapDispatchToProps = dispatch => bindActionCreators({ openModal }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(NewOrder)
