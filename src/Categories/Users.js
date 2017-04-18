import React from 'react';
import { List, Responsive, SimpleList, Edit, Create, Datagrid, TextField, Filter, EditButton, DeleteButton, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest/lib/mui';

const UserFilter = props => (
  <Filter {...props}>
    <TextInput label="Pesquisar" source="q" alwaysOn />
    <ReferenceInput label="Usuário" source="id" reference="user" allowEmpty>
      <SelectInput source="id" optionText="userName" />
    </ReferenceInput>
  </Filter>
);

export const UserList = props => (
  <List {...props} filters={<UserFilter />} title={'Lista de Usuários'}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.title}
          secondaryText={record => `${record.views} views`}
          tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
        />
    }
      medium={
        <Datagrid>
          <TextField source="id" label="ID" />
          <TextField source="userFullName" label="Nome Completo" />
          <TextField source="userName" label="Nome de Usuário" />
          <EditButton />
          <DeleteButton />
        </Datagrid>
    }
    />
  </List>
);

const UserName = ({ record }) => {
  return <span>Usuário {record ? `"${record.userName}"` : ''}</span>;
};

export const UserEdit = props => (
  <Edit title={<UserName />} {...props}>
    <SimpleForm>
      <TextInput source="userFullName" label="Nome Completo" />
      <TextInput source="userName" label="Nome de Usuário" />
      <TextInput type="password" source="userPassword" label="Senha" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" label="ID" />
      <TextInput source="userFullName" label="Nome Completo" />
      <TextInput source="userName" label="Nome de Usuário" />
      <TextInput type="password" source="userPassword" label="Senha" />
    </SimpleForm>
  </Create>
);
