import React from 'react';
import {
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  List,
  ReferenceField,
} from 'admin-on-rest/lib/mui';

export const VaccinationRecordsList = props => (

  <List {...props} title={'Vacinações'}>
    <Datagrid>
      <ReferenceField label="Paciente" source="patientId" reference="patients" allowEmpty>
        <TextField source="patientName" />
      </ReferenceField>
      <TextField source="veterinarian" label="Veterinário" />
      <TextField source="anamnesis" label="Anamnese" />
      <TextField source="vaccinationName" label="Vacina" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
