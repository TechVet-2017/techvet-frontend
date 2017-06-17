import React from 'react';
import {
  Show,
  SimpleShowLayout,
  TextField,
  ReferenceField,
} from 'admin-on-rest/lib/mui';

export const BathAndGroomingShow = props => (
  <Show title={'Banho & Tosa'} {...props}>
    <SimpleShowLayout>
      <ReferenceField label="Paciente" source="patientId" reference="patients" allowEmpty>
        <TextField optionText="patientName" />
      </ReferenceField>
      <TextField
        source="serviceBathGrooming"
        label="Serviço"
        choices={[
          { id: 'Banho', name: 'Banho' },
          { id: 'Banho e Tosa', name: 'Banho e Tosa' },
        ]}
      />
    </SimpleShowLayout>
  </Show>
);