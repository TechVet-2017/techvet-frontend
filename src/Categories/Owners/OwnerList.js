import React from 'react';
import {
  List, Responsive, SimpleList, ShowButton,
  Datagrid, TextField, EditButton, DeleteButton, Filter,
  TextInput,
} from 'admin-on-rest/lib/mui';

const OwnerFilter = props => (
  <Filter {...props}>
    <TextInput label="Procurar por CPF" source="cpf" />
    <TextInput label="Procurar por nome" source="ownerName" />
    <TextInput label="Procurar por sobrenome" source="ownerLastName" />
  </Filter>
);
export const OwnerList = props => (
  <List
    {...props}
    title={'Lista de proprietários'}
    perPage={5}
    filters={<OwnerFilter />}
  >
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
