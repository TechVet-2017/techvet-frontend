import React from 'react';
import { List, Responsive, SimpleList, Edit, Create, Datagrid, EmailField, EmailInput, TextField, Filter, EditButton, DeleteButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest/lib/mui';

const UserFilter = props => (
  <Filter {...props}>
    <TextInput label="Pesquisar" source="q" alwaysOn />
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
            <TextField source="name" label="Nome" />
            <EmailField source="email" label="Email" />
            <EditButton />
          </Datagrid>
      }
     />
  </List>
);

const UserName = ({ record }) => {
  return <span>Usuário {record ? `"${record.name}"` : ''}</span>;
};

export const UserEdit = props => (
  <Edit title={<UserName />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" label="ID"/>
      <TextInput source="name" label="Nome"/>
      <TextInput source="email" label="Email"/>
    </SimpleForm>
  </Edit>
);

export const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" label="ID" allowEmpty="false"/>
      <TextInput source="name" label="Nome" />
      <TextInput source="email" label="Email" />
    </SimpleForm>
  </Create>
);
