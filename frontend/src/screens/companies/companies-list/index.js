import React from 'react'
import {
  Grid, Cell,
  DataTable, TableHeader,
  List, ListItem, ListItemContent, ListItemAction
} from 'react-mdl'

const CompaniesList = ({ companies }) => (
  <Grid>
    <Cell col={12} hidePhone>
      <DataTable shadow={0} rows={companies} style={{ width: '100%' }}>
        <TableHeader name='name'>Nome</TableHeader>
        <TableHeader name='cnpj'>CNPJ</TableHeader>
        <TableHeader name='totalOrders'>Qtd. Pedidos</TableHeader>
      </DataTable>
    </Cell>

    <Cell col={12} hideTablet hideDesktop>
      <List>
        {
          companies.map((company, key) => (
            <ListItem twoLine key={`company_${key}`}>
              <ListItemContent avatar='business' subtitle={`CNPJ ${company.cnpj}`}>
                { company.name }
              </ListItemContent>
              <ListItemAction>
                { company.totalOrders }
              </ListItemAction>
            </ListItem>
          ))
        }
      </List>
    </Cell>
  </Grid>
)

export default CompaniesList