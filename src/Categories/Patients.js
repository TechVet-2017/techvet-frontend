import React from 'react';
import { List, Responsive, SimpleList, Edit, DateInput, RadioButtonGroupInput, Create, Datagrid, TextField, EditButton, DeleteButton, SimpleForm, TextInput } from 'admin-on-rest/lib/mui';

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
          <TextInput source="patientName" label="Nome do Paciente" />
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
      <TextInput source="patientName" label="Nome do Paciente" />
      <RadioButtonGroupInput source="specie" label="Espécie"  choices={[
        { id: 'canine', name: 'Canino' },
        { id: 'feline', name: 'Felino' },
     ]} />
      <TextInput source="breed" label="Raça" />
      <TextInput source="breed" label="Raça" />
       <RadioButtonGroupInput source="size" label="Tamanho" choices={[
        { id: 's', name: 'P' },
        { id: 'm', name: 'M' },
        { id: 'l', name: 'G' },
     ]} />
      <TextField source="gender" label="Sexo" />
      <DateInput source="birthday" label="Data de Nascimento" />
      <TextField source="coat" label="Pelagem" />
    </SimpleForm>
  </Edit>
);

export const PatientCreate = props => (
  <Create {...props} title={'Criar Paciente'}>
    <SimpleForm>
     <TextInput source="patientName" label="Nome do Paciente" />
      <RadioButtonGroupInput source="spicie" label="Espécie" choices={[
        { id: 'canine', name: 'Canino' },
        { id: 'feline', name: 'Felino' },
     ]} />
      <TextInput source="breed" label="Raça" />
       <RadioButtonGroupInput source="size" label="Tamanho" choices={[
        { id: 's', name: 'P' },
        { id: 'm', name: 'M' },
        { id: 'l', name: 'G' },
     ]} />
       <TextInput source="gender" label="Sexo" />
       <RadioButtonGroupInput source="size" label="Tamanho" choices={[
        { id: 'male', name: 'M' },
        { id: 'female', name: 'F' },
     ]} />
      <DateInput source="birthday" label="Data de Nascimento" />
      <TextField source="coat" label="Pelagem" />
    </SimpleForm>
  </Create>
);
