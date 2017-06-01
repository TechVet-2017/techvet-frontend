import React from 'react';
import {
  List, Responsive, SimpleList, ShowButton,
  Datagrid, TextField, EditButton, DeleteButton, Filter,
  TextInput,
} from 'admin-on-rest/lib/mui';
import {
  formatCPF,
} from '../Util';

// Global variables
const REGISTERS_PER_PAGE = 5;

const OwnerFilter = props => (
  <Filter {...props}>
    <TextInput label="Procurar por CPF" source="cpf" normalize={formatCPF} />
    <TextInput label="Procurar por nome" source="ownerName" />
    <TextInput label="Procurar por sobrenome" source="ownerLastName" />
  </Filter>
);
export const OwnerList = props => (
  <List
    {...props}
    title={'Lista de proprietários'}
    perPage={REGISTERS_PER_PAGE}
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
