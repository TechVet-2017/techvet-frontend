import React from 'react';
import { List, Responsive, SimpleList, Edit, Create, Datagrid, ReferenceField, DateField, TextField, EditButton, DeleteButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest/lib/mui';

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
      <TextInput source="title" />
      <LongTextInput source="body" />
    </SimpleForm>
  </Edit>
);

export const PatientCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextField source="patientName" label="Nome do Paciente" />
      <TextInput source="specie" label="Espécie" />
      <TextField source="breed" label="Raça" />
      <TextInput source="size" label="Tamanho" />
      <TextInput source="gender" label="Sexo" />
      <DateField source="birthday" label="Data de Nascimente" />
      <TextField source="coat" label="Pelagem" />
    </SimpleForm>
  </Create>
);
