import React from 'react';
import { List, Responsive, SimpleList, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DeleteButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest/lib/mui';

export const PatientList = props => (
<List {...props}  title={'Pacientes'}>
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
          <TextField source="id" label="RG DB Nº" />
          <ReferenceField label="Nome do Paciente" source="id" reference="user">
            <TextField source="userFullName" />
          </ReferenceField>
          <TextField source="title" label="Espécie" />
          <TextField source="body" label="Raça" />
          <EditButton />
          <DeleteButton />
        </Datagrid>
      }
    />
  </List>
);

const PatientTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PatientEdit = props => (
  <Edit title={<PatientTitle />} {...props}>
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

export const PatientCreate = props => (
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