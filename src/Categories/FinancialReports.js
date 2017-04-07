import React from 'react';
import { List, Datagrid, EmailField, TextField } from 'admin-on-rest/lib/mui';

export const FinancialReportList = props => (
  <List {...props} title={'Relatório Financeiro'}>
    <Datagrid>
      <TextField source="id" label="ID" />
      <TextField source="name" label="Nome" />
      <EmailField source="email" label="Email" />
    </Datagrid>
  </List>
);
