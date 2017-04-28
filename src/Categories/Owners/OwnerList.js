import React from 'react';
import {
  List, Responsive, SimpleList, ShowButton,
  Datagrid, TextField, EditButton, DeleteButton,
} from 'admin-on-rest/lib/mui';

export const OwnerList = props => (
  <List {...props} title={'Lista de proprietários'}>
    <Responsive
      small={
        <SimpleList
          primaryText={owner => `${owner.ownerName}`}
          secondaryText={owner => `${owner.ownerLastName}`}
          tertiaryText={owner => `${owner.cpf}`}
        />
      }
      medium={
        <Datagrid>
          <TextField
            source="cpf"
            label="CPF"
          />
          <TextField
            source="ownerName"
            label="Nome"
          />
          <TextField
            source="ownerLastName"
            label="Sobrenome"
          />
          <TextField
            source="phoneNumber"
            label="Telefone"
          />
          <ShowButton />
          <EditButton />
          <DeleteButton />
        </Datagrid>
      }
    />
  </List>
);
