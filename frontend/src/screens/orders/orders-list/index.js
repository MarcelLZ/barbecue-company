import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { cancelOrder, getAllOrders } from 'redux-flow/orders/reducer'
import {
  Grid, Cell, Chip,
  DataTable, TableHeader,
  List, ListItem, ListItemContent, ListItemAction
} from 'react-mdl'

import OrderActions from './order-action'
import orderItems from './order-items'

class OrdersList extends PureComponent {
  cancelOrder = (companyId, orderId) => {
    const { cancelOrder, getAllOrders } = this.props
    cancelOrder(companyId, orderId)
      .then(getAllOrders())
  }

  render () {
    const { orders } = this.props

    return (
      <Grid>
        <Cell col={12} hidePhone>
          <DataTable shadow={0} rows={orders} style={{ width: '100%' }}>
            <TableHeader name='code'>Código do Pedido</TableHeader>
            <TableHeader name='company' cellFormatter={company => (<Chip>{company}</Chip>)}>
              Empresa
            </TableHeader>
            <TableHeader name='items' cellFormatter={orderItems}>
              Itens do Pedido
            </TableHeader>
            <TableHeader
              name='identifiers'
              cellFormatter={identifiers => (
                <OrderActions cancelOrder={() => this.cancelOrder(
                  identifiers.companyId,
                  identifiers.orderId
                )} />
              ) }
            />
          </DataTable>
        </Cell>

        <Cell col={12} hideTablet hideDesktop>
          <List>
            {
              orders.map((order, key) => (
                <ListItem threeLine key={`order_${key}`}>
                  <ListItemContent avatar='local_offer' subtitle={orderItems(order.items)}>
                    Pedido: { order.code }
                  </ListItemContent>
                  <ListItemAction>
                    <OrderActions cancelOrder={() => this.cancelOrder(
                        order.identifiers.companyId,
                        order.identifiers.orderId
                      )
                    } />
                  </ListItemAction>
                </ListItem>
              ))
            }
          </List>
        </Cell>
      </Grid>
    )
  }
}

OrdersList.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape({
    identifiers: PropTypes.object.isRequired,
    company: PropTypes.string,
    code: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      description: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired
    })).isRequired
  })).isRequired
}

const mapDispatchToProps = dispatch => bindActionCreators({
  cancelOrder,
  getAllOrders
}, dispatch)
export default connect(null, mapDispatchToProps)(OrdersList)
