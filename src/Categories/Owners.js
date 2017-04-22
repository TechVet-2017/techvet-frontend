import React from 'react';
import { List, Responsive, SimpleList, Edit, Create, Datagrid, TextField, Filter, EditButton, 
DeleteButton, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest/lib/mui';

const OwnerFilter = props => (
  <Filter {...props}>
    <TextInput label="Pesquisar" source="q" alwaysOn />
    <ReferenceInput label="Proprietário" source="id" reference="owner" allowEmpty>
      <SelectInput source="id" optionText="ownerName" />
    </ReferenceInput>
  </Filter>
);

export const OwnerList = props => (
  <List {...props} filters={<OwnerFilter />} title={'Lista de proprietários'}>
    <Responsive
      small={
        <SimpleList
          primaryText={owner => `Nome: ${owner.ownerName}`}
          secondaryText={owner => `Sobrenome: ${owner.lastName}`}
          tertiaryText={owner => `Telefone: ${owner.phoneNumber}`}
        />
    }
      medium={
        <Datagrid>
          <TextField source="id" label="ID" />
          <TextField source="ownerName" label="Nome" />
          <TextField source="ownerLastName" label="Sobrenome" />
          <TextField source="ownerPhoneNumber" label="Telefone" />
          <EditButton />
          <DeleteButton />
        </Datagrid>
    }
    />
  </List>
);
export const OwnerCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="ownerID" label="ID" />
      <TextInput source="cpf" label="CPF" />
      <TextInput source="ownerName" label="Primeiro Nome" />
      <TextInput source="ownerLastName" label="Sobrenome" />
      <TextInput source="phoneNumber" label="Telefone" />
      <TextInput source="zipCode" label="Código Postal" />
      <TextInput source="district" label="Estado" />
      <TextInput source="publicPlace" label="Endereço" />
      <TextInput source="addressNumber" label="Número" />
    </SimpleForm>
  </Create>
);

const OwnerName = ({ record }) => {
  return <span>Proprietário {record ? `"${record.ownerName}"` : ''}</span>;
};

export const OwnerEdit = props => (
  <Edit title={<OwnerName />} {...props}>
    <SimpleForm>
      <TextInput source="ownerID" label="ID" />
      <TextInput source="cpf" label="CPF" />
      <TextInput source="ownerName" label="Primeiro Nome" />
      <TextInput source="ownerLastName" label="Sobrenome" />
      <TextInput source="phoneNumber" label="Telefone" />
      <TextInput source="zipCode" label="Código Postal" />
      <TextInput source="district" label="Estado" />
      <TextInput source="publicPlace" label="Endereço" />
      <TextInput source="addressNumber" label="Número" />
    </SimpleForm>
  </Edit>
);