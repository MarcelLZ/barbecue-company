import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllOrders } from 'redux-flow/orders/reducer'
import { Tabs, Tab } from 'react-mdl'

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
    const { getAllOrders } = this.props
    getAllOrders()
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
          <NewOrder />
        </ActiveContent>
      </AppLayout>
    ]
  }
}

const mapStateToProps = ({ orders }) => ({ ...orders })
const mapDispatchToProps = dispatch => bindActionCreators({ getAllOrders }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Orders)
