import React from 'react';
import {
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  List,
  ReferenceField,
} from 'admin-on-rest/lib/mui';

export const AppointmentRecordsList = props => (

  <List {...props} title={'Consultas'}>
    <Datagrid>
      <ReferenceField label="Paciente" source="patientId" reference="patients" linkType="show" allowEmpty>
        <TextField source="patientName" />
      </ReferenceField>
      <TextField source="veterinarian" label="Veterinário" />
      <TextField source="anamnesis" label="Anamnese" />
      <TextField source="exam" label="Exame" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);