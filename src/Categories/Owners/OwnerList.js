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
          primaryText={owner => `Nome: ${owner.ownerName}`}
          secondaryText={owner => `Sobrenome: ${owner.ownerLastName}`}
          tertiaryText={owner => `Telefone: ${owner.phoneNumber}`}
        />
      }
      medium={
        <Datagrid>
          <TextField
            source="id"
            label="ID"
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
