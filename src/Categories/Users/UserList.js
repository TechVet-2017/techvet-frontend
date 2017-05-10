import React from 'react';
import {
  List, Responsive, SimpleList, EditButton, Datagrid, DeleteButton, TextField,
} from 'admin-on-rest/lib/mui';

export const UserList = props => (
  <List {...props} title={'Lista de Usuários'}>
    <Responsive
      small={
        <SimpleList
          primaryText={user => `ID: ${user.id}`}
          secondaryText={user => `Nome de Usuário: ${user.userName}`}
          tertiaryText={user => `Nome Completo: ${user.userFullName}`}
        />
    }
      medium={
        <Datagrid>
          <TextField
            source="id"
            label="ID"
          />
          <TextField
            source="userFullName"
            label="Nome Completo"
          />
          <TextField
            source="userName"
            label="Nome de Usuário"
          />
          <EditButton />
          <DeleteButton />
        </Datagrid>
    }
    />
  </List>
);
