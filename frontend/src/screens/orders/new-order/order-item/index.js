import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeOrderItem } from 'redux-flow/orders/reducer'
import {
  IconButton,
  Grid, Cell,
  DataTable, TableHeader,
  List, ListItem, ListItemContent, ListItemAction
} from 'react-mdl'

class OrderItem extends PureComponent {
  removeOrderItem = id => {
    const { removeOrderItem } = this.props
    removeOrderItem(id)
  }

  render () {
    const { orderItems } = this.props

    const renderAction = id =>
      (<IconButton name='remove_circle' onClick={() => this.removeOrderItem(id)} />)

    return (
      <Grid>
        <Cell col={12} hidePhone>
          <DataTable shadow={0} rows={orderItems} style={{ width: '100%' }}>
            <TableHeader name='description'>Item</TableHeader>
            <TableHeader name='quantity'>Quantidade</TableHeader>
            <TableHeader name='id' cellFormatter={renderAction} />
          </DataTable>
        </Cell>

        <Cell col={12} hideTablet hideDesktop>
          <List>
            {
              orderItems.map((item, key) => (
                <ListItem twoLine key={`item_${key}`}>
                  <ListItemContent avatar='thumb_up' subtitle={`Quantidade: ${item.quantity}`}>
                    { item.description }
                  </ListItemContent>
                  <ListItemAction>
                    { renderAction(item._id) }
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

OrderItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
  }))
}

const mapDispatchToProps = dispatch => bindActionCreators({ removeOrderItem }, dispatch)
export default connect(null, mapDispatchToProps)(OrderItem)
