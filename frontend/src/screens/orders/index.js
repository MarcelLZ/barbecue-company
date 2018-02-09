import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllOrders } from 'redux-flow/orders/reducer'

import Loading from 'components/loading'
import AppLayout from 'components/layout'
import OrderList from './orders-list'
import AddButton from 'components/add-button'

class Orders extends PureComponent {
  componentDidMount () {
    const { getAllOrders } = this.props
    getAllOrders()
  }

  render () {
    const { orders, isFetching } = this.props

    return [
      <Loading key='loading' fetching={isFetching} />,
      <AddButton key='add-order' />,
      <AppLayout key='orders'>
        <OrderList orders={orders} />
      </AppLayout>
    ]
  }
}

const mapStateToProps = ({ orders }) => ({ ...orders })
const mapDispatchToProps = dispatch => bindActionCreators({ getAllOrders }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Orders)
