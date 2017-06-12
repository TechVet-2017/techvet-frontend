import React from 'react';
import {
  Create,
  SimpleForm,
  RadioButtonGroupInput,
  ReferenceInput,
  SelectInput,
} from 'admin-on-rest/lib/mui';

import { required } from '../Validators';

export const BathAndGroomingCreate = props => (
  <Create {...props} title={'Adicionar Serviço'}>
    <SimpleForm>
      <RadioButtonGroupInput
        source="serviceBathGrooming"
        validate={required}
        label="Serviço"
        choices={[
          { id: 'Banho', name: 'Banho' },
          { id: 'Banho e Tosa', name: 'Banho e Tosa' },
        ]}
      />
      <ReferenceInput label="Paciente" source="patientId" reference="patients" allowEmpty>
        <SelectInput optionText="patientName" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
