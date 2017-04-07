import React from 'react';
import { List, Datagrid, EmailField, TextField } from 'admin-on-rest/lib/mui';

export const PatientList = props => (
  <List {...props} title={'Pacientes'}>
    <Datagrid>
      <TextField source="id" label="ID" />
      <TextField source="name" label="Nome" />
      <EmailField source="email" label="Email" />
    </Datagrid>
  </List>
  );

