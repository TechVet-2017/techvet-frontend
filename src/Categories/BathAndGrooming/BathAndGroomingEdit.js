import React from 'react';
import {
  RadioButtonGroupInput,
  Edit,
  SimpleForm,
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
          { id: "Banho", name: "Banho"},
          { id: "Banho e Tosa", name: "Banho e Tosa"},
        ]}
      />
    </SimpleForm>
  </Edit>
);
