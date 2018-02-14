import React from 'react'
import {
  Grid, Cell,
  DataTable, TableHeader,
  List, ListItem, ListItemContent, ListItemAction
} from 'react-mdl'

import TotalOrders from './total-orders'
import FilterOrders from './filter-orders'

const CompaniesList = ({ companies }) => (
  <Grid>
    <Cell col={12} hidePhone>
      <DataTable shadow={0} rows={companies} style={{ width: '100%' }}>
        <TableHeader name='name'>Nome</TableHeader>
        <TableHeader name='cnpj'>CNPJ</TableHeader>
        <TableHeader name='orders' cellFormatter={orders => <TotalOrders orders={orders} />}>
          Qtd. Pedidos
        </TableHeader>
        <TableHeader name='_id' cellFormatter={id => <FilterOrders companyId={id} />}>
          Ver pedidos
        </TableHeader>
      </DataTable>
    </Cell>

    <Cell col={12} hideTablet hideDesktop>
      <List>
        {
          companies.map((company, indice) => (
            <ListItem twoLine key={`company_${indice}`}>
              <ListItemContent avatar='business' subtitle={`CNPJ ${company.cnpj}`}>
                { company.name }
              </ListItemContent>
              <ListItemAction>
                <TotalOrders orders={company.orders} />
                <FilterOrders companyId={company._id} />
              </ListItemAction>
            </ListItem>
          ))
        }
      </List>
    </Cell>
  </Grid>
)

export default CompaniesList
