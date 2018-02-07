import React from 'react'
import {
  Grid, Cell,
  DataTable, TableHeader
} from 'react-mdl'

import AppLayout from 'components/layout'

const empresas = [
  { name: 'Druptec Soluções', cnpj: '28.354.669/0001-09', qtdPedidos: 2 },
  { name: 'BRFoods', cnpj: '35.577.109/0001-70', qtdPedidos: 1 },
  { name: 'PasquePag', cnpj: '34.763.818/0001-88', qtdPedidos: 2 }
]

const Dashboard = () => (
  <AppLayout breadcrumb='Dashboard'>
    <Grid style={{ width: '70%' }}>
      <Cell col={12}>

        <DataTable shadow={0} rows={empresas} style={{ width: '100%' }}>
          <TableHeader name='name'>Nome</TableHeader>
          <TableHeader name='cnpj'>CNPJ</TableHeader>
          <TableHeader name='qtdPedidos'>Qtd. Pedidos</TableHeader>
        </DataTable>

      </Cell>
    </Grid>
  </AppLayout>
)

export default Dashboard
