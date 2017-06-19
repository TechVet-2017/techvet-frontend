import React from 'react';
import {
  RadioButtonGroupInput,
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
} from 'admin-on-rest/lib/mui';

import { required } from '../Validators';

export const BathAndGroomingEdit = props => (
  <Edit title={'Editar Serviço'} {...props}>
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
  </Edit>
);
