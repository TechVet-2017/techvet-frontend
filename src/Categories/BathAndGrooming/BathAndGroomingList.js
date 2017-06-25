import React from 'react';
import {
  List,
  Responsive,
  SimpleList,
  Datagrid,
  EditButton,
  DeleteButton,
  TextField,
  ShowButton,
  ReferenceField,
} from 'admin-on-rest/lib/mui';

// Global variable
const registersPerPage = 5;

export const BathAndGroomingList = props => (
  <List
    {...props}
    perPage={registersPerPage}
    title={'Adicionar Serviço'}
  >
    <Responsive
      small={
        <SimpleList
          primaryText={patient => `Nome: ${patient.patientName}`}
          secondaryText={bathAndGrooming => `ID: ${bathAndGrooming.id}`}
          tertiaryText={bathAndGrooming => `Serviço: ${bathAndGrooming.serviceBathGrooming}`}
        />
      }
      medium={
        <Datagrid>
          <TextField source="id" label="ID" />
          <ReferenceField label="Animal" source="patientId" reference="patients" allowEmpty>
            <TextField source="patientName" />
          </ReferenceField>
          <TextField source="serviceBathGrooming" label="Serviço" />
          <ShowButton />
          <EditButton />
          <DeleteButton />
        </Datagrid>
      }
    />
  </List>
);
