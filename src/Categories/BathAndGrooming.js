import React from 'react';
import { List, Responsive, SimpleList, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DeleteButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest/lib/mui';


export const BathAndGroomingList = props => (
 <List {...props} title={'Banho & Tosa'}>
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
            <TextField source="userFullName" />
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


const BathAndGroomingTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const BathAndGroomingEdit = props => (
  <Edit title={<BathAndGroomingTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <ReferenceInput label="Usuário" source="user" reference="user">
        <SelectInput optionText="userFullName" />
      </ReferenceInput>
      <TextInput source="title" />
      <LongTextInput source="body" />
    </SimpleForm>
  </Edit>
);

export const BathAndGroomingCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput label="Usuário" source="id" reference="user" allowEmpty>
        <SelectInput optionText="userFullName" />
      </ReferenceInput>
      <TextInput source="title" label="Título" />
      <LongTextInput source="body" label="Corpo" />
    </SimpleForm>
  </Create>
);
