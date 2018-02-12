import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { cancelOrder } from 'redux-flow/orders/reducer'
import {
  Grid, Cell, Chip,
  DataTable, TableHeader,
  List, ListItem, ListItemContent, ListItemAction
} from 'react-mdl'

import OrderActions from './order-action'
import orderItems from './order-items'

class OrdersList extends PureComponent {
  cancelOrder = (orderId) => {
    const { cancelOrder } = this.props
    cancelOrder(orderId)
  }

  render () {
    const { orders } = this.props
    const teste = [{ _id: '6464646', code: '123232', items: [], company: { id: 1, name: 'teste' } }]

    return (
      <Grid>
        <Cell col={12} hidePhone>
          <DataTable shadow={0} rows={teste} style={{ width: '100%' }}>
            <TableHeader name='code'>Código do Pedido</TableHeader>
            <TableHeader name='company' cellFormatter={company => (<Chip>{company.name}</Chip>)}>
              Empresa
            </TableHeader>
            <TableHeader name='items' cellFormatter={orderItems}>
              Itens do Pedido
            </TableHeader>
            <TableHeader
              name='_id'
              cellFormatter={id => (
                <OrderActions
                  cancelOrder={() => this.cancelOrder(id)}
                />
              )}
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
                    <OrderActions
                      cancelOrder={() => this.cancelOrder(
                        order._id
                      )}
                    />
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
    _id: PropTypes.string.isRequired,
    company: PropTypes.string,
    code: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      description: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired
    })).isRequired
  })).isRequired
}

const mapDispatchToProps = dispatch => bindActionCreators({ cancelOrder }, dispatch)
export default connect(null, mapDispatchToProps)(OrdersList)
