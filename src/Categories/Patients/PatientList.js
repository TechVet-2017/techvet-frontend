import React from 'react';
import {
  List, Responsive, SimpleList, ShowButton,
  Datagrid, TextField, EditButton, Filter, 
  TextInput, ReferenceInput, DeleteButton,
} from 'admin-on-rest/lib/mui';

const PatientFilter = props => (
  <Filter {...props}>
    <TextInput label="Pesquisar" source="patientName" alwaysOn/>
    <ReferenceInput label="Nome do Paciente" source="patientName" reference="Nome do Paciente"  allowEmpty>
    </ReferenceInput>
  </Filter>
);

export const PatientList = props => (
  <List {...props} filters={<PatientFilter />}title={'Pacientes'}>
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