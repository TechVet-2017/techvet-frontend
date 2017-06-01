import React from 'react';
import {
  List, Responsive, SimpleList, ShowButton,
  Datagrid, TextField, EditButton, Filter,
  TextInput, DeleteButton,
} from 'admin-on-rest/lib/mui';

// Global variable
const registersPerPage = 5;

const PatientFilter = props => (
  <Filter {...props}>
    <TextInput label="Procurar por nome" source="patientName" />
    <TextInput label="Procurar por RG BD Nº" source="id" />
  </Filter>
);

export const PatientList = props => (
  <List
    {...props}
    filters={<PatientFilter />}
    perPage={registersPerPage}
    title={'LIsta de Pacientes'}
  >
    <Responsive
      small={
        <SimpleList
          primaryText={patient => `Nome: ${patient.patientName}`}
          secondaryText={patient => patient.breed}
          tertiaryText={patient => patient.species}
        />
      }
      medium={
        <Datagrid>
          <TextField source="id" label="RG BD Nº" />
          <TextField source="patientName" label="Nome do Paciente" />
          <TextField source="species" label="Espécie" />
          <TextField source="breed" label="Raça" />
          <ShowButton />
          <EditButton />
          <DeleteButton />
        </Datagrid>
      }
    />
  </List>
);
