import React from 'react';
import { List, Responsive, SimpleList, Edit, Create, Datagrid, ReferenceField, TextField, Filter, EditButton, DeleteButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest/lib/mui';

const PostFilter = props => (
  <Filter {...props}>
    <TextInput label="Pesquisar" source="q" alwaysOn />
    <ReferenceInput label="Usuário" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export const PostList = props => (
  <List {...props} filters={<PostFilter />} title={'Lista de Postagens'}>
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
          <ReferenceField label="Usuário" source="id" reference="user">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="title" label="Título" />
          <TextField source="body" label="Corpo" />
          <EditButton />
          <DeleteButton />
        </Datagrid>
      }
    />
  </List>
);

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = props => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <ReferenceInput label="Usuário" source="user" reference="user">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <LongTextInput source="body" />
    </SimpleForm>
  </Edit>
);

export const PostCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput label="Usuário" source="id" reference="user" allowEmpty>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" label="Título" />
      <LongTextInput source="body" label="Corpo" />
    </SimpleForm>
  </Create>
);

