import React from 'react';
import {
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  List,
} from 'admin-on-rest/lib/mui';

export const VaccinationRecordsList = props => (

  <List {...props} title={'Vacinações'}>
    <Datagrid>
      <TextField source="veterinarian" label="Paciente" />
      <TextField source="veterinarian" label="Veterinário" />
      <TextField source="anamnesis" label="Anamnese" />
      <TextField source="vaccinationName" label="Vacina" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
