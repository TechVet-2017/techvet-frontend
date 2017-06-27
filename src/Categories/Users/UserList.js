import React from 'react';
import {
  List,
  Responsive,
  SimpleList,
  EditButton,
  Datagrid,
  DeleteButton,
  Filter,
  TextField,
  TextInput,
} from 'admin-on-rest/lib/mui';

// Global variables
const REGISTERS_PER_PAGE = 5;

const UserFilter = props => (
  <Filter {...props}>
    <TextInput label="Procurar por Usuário" source="userName" />
    <TextInput label="Procurar por Nome Completo" source="userFullName" />
  </Filter>
);

export const UserList = props => (
  <List
    {...props}
    title={'Lista de Usuários'}
    perPage={REGISTERS_PER_PAGE}
    filters={<UserFilter />}
  >
    <Responsive
      small={
        <SimpleList
          primaryText={user => `Usuário: ${user.userName}`}
          secondaryText={user => `Nome Completo: ${user.userFullName}`}
          tertiaryText={user => `ID: ${user.id}`}
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
