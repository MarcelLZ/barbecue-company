import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllOrders, finishOrder } from 'redux-flow/orders/reducer'
import { Tabs, Tab } from 'react-mdl'
import { notify } from 'react-notify-toast'

import Loading from 'components/loading'
import AppLayout from 'components/layout'
import ActiveContent from 'components/active-content'
import OrderList from './orders-list'
import NewOrder from './new-order'

class Orders extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      activeTab: 0
    }
  }

  componentDidMount () {
    this._getAllOrders()
  }

  finishOrder = () => {
    try {
      const { finishOrder } = this.props
      notify.show('Pedido finalizado.', 'success')
      await finishOrder()
      this._getAllOrders()
    } catch (error) {
      notify.show('Erro ao finalizar pedido.', 'error')
    }
  }

  _getAllOrders = () => {
    const { getAllOrders, match: { params } } = this.props
    const { companyId } = params

    getAllOrders(companyId)
  }

  handleActiveTab (activeTab) {
    this.setState({
      activeTab
    })
  }

  render () {
    const { orders, isFetching } = this.props
    const { activeTab } = this.state

    return [
      <Loading key='loading' fetching={isFetching} />,
      <AppLayout key='orders'>
        <Tabs activeTab={activeTab} onChange={tabId => this.handleActiveTab(tabId)}>
          <Tab>Pedidos</Tab>
          <Tab>Novo Pedido</Tab>
        </Tabs>

        <ActiveContent active={activeTab}>
          <OrderList orders={orders} />
          <NewOrder onFinishOrders={this.finishOrder} />
        </ActiveContent>
      </AppLayout>
    ]
  }
}

const mapStateToProps = ({ orders }) => ({ ...orders })
const mapDispatchToProps = dispatch => bindActionCreators({
  getAllOrders,
  finishOrder
}, dispatch)
const connectedOrders = connect(mapStateToProps, mapDispatchToProps)(Orders)
export default withRouter(connectedOrders)
