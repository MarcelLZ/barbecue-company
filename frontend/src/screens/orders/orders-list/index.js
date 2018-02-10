import React from 'react'
import PropTypes from 'prop-types'
import {
  IconButton,
  Grid, Cell,
  DataTable, TableHeader,
  List, ListItem, ListItemContent, ListItemAction
} from 'react-mdl'

const renderItems = items =>
  items.map(item => {
    return `${item.quantity}x ${item.description}, `
  })

const renderAction = id =>
  (<IconButton name='delete' />)

const OrdersList = ({ orders }) => (
  <Grid>
    <Cell col={12} hidePhone>
      <DataTable shadow={0} rows={orders} style={{ width: '100%' }}>
        <TableHeader name='orderCode'>Código do Pedido</TableHeader>
        <TableHeader name='orderItems' cellFormatter={renderItems}>Itens do Pedido</TableHeader>
        <TableHeader name='_id' cellFormatter={renderAction} />
      </DataTable>
    </Cell>

    <Cell col={12} hideTablet hideDesktop>
      <List>
        {
          orders.map((order, key) => (
            <ListItem threeLine key={`order_${key}`}>
              <ListItemContent avatar='local_offer' subtitle={renderItems(order.orderItems)}>
                Pedido: { order.orderCode }
              </ListItemContent>
              <ListItemAction>
                { renderAction(order._id) }
              </ListItemAction>
            </ListItem>
          ))
        }
      </List>
    </Cell>
  </Grid>
)

OrdersList.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    company: PropTypes.string,
    orderCode: PropTypes.number.isRequired,
    orderItems: PropTypes.arrayOf(PropTypes.shape({
      description: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired
    })).isRequired
  })).isRequired
}

export default OrdersList
