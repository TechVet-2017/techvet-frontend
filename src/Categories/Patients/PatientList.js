import React from 'react';
import {
  List,
  Responsive,
  SimpleList,
  ShowButton,
  Datagrid,
  TextField,
  EditButton,
  Filter,
  TextInput,
  DeleteButton,
  ReferenceField,
} from 'admin-on-rest/lib/mui';

// Global variable
const registersPerPage = 5;

const PatientFilter = props => (
  <Filter {...props}>
    <TextInput label="Procurar por nome" source="patientName" />
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
          <ReferenceField label="Dono" source="patientOwnerId" reference="owners" allowEmpty>
            <TextField source="ownerName" />
          </ReferenceField>
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
