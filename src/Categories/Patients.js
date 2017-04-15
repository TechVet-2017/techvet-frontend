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
          <TextField source="patientName" label="Nome do Paciente" />
          <TextField source="specie" label="Espécie" />
          <TextField source="breed" label="Raça" />
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
        { id: 'Canino', name: 'Canino' },
        { id: 'Felino', name: 'Felino' },
      ]} />
      <TextInput source="breed" label="Raça" />
      <RadioButtonGroupInput source="size" label="Tamanho" choices={[
        { id: 'Pequeno', name: 'Pequeno' },
        { id: 'Médio', name: 'Médio' },
        { id: 'Grande', name: 'Grande' },
     ]} />
      <RadioButtonGroupInput source="gender" label="Sexo" choices={[
        { id: 'Macho', name: 'Macho' },
        { id: 'Fêmea', name: 'Fêmea' },
     ]} />
      <DateInput source="birthday" label="Data de Nascimento" />
      <TextField source="coat" label="Pelagem" />
    </SimpleForm>
  </Edit>
);

export const PatientCreate = props => (
  <Create {...props} title={'Pacientes'}>
    <SimpleForm>
     <TextInput source="patientName" label="Nome do Paciente" />
      <RadioButtonGroupInput source="specie" label="Espécie" choices={[
        { id: 'Canino', name: 'Canino' },
        { id: 'Felino', name: 'Felino' },
     ]} />
      <TextInput source="breed" label="Raça" />
       <RadioButtonGroupInput source="size" label="Tamanho" choices={[
        { id: 'Pequeno', name: 'Pequeno' },
        { id: 'Médio', name: 'Médio' },
        { id: 'Grande', name: 'Grande' },
     ]} />
       <RadioButtonGroupInput source="gender" label="Sexo" choices={[
        { id: 'Macho', name: 'Macho' },
        { id: 'Fêmea', name: 'Fêmea' },
     ]} />
      <DateInput source="birthday" label="Data de Nascimento" />
      <TextInput source="coat" label="Pelagem" />
    </SimpleForm>
  </Create>
);
