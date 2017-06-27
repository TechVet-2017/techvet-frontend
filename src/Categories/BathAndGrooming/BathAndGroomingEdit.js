import React from 'react';
import {
  RadioButtonGroupInput,
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  LongTextInput,
} from 'admin-on-rest/lib/mui';

import { required } from '../Validators';

export const BathAndGroomingEdit = props => (
  <Edit title={'Editar Serviço'} {...props}>
    <SimpleForm>
      <ReferenceInput
        label="Animal"
        source="patientId"
        reference="patients"
        validate={required}
        allowEmpty
      >
        <SelectInput
          validate={required}
          optionText="patientName"
        />
      </ReferenceInput>
      <RadioButtonGroupInput
        source="serviceBathGrooming"
        validate={required}
        label="Serviço"
        choices={[
          { id: 'Banho', name: 'Banho' },
          { id: 'Banho e Tosa', name: 'Banho e Tosa' },
        ]}
      />
      <LongTextInput
        source="serviceDescription"
        label="Descrição do Serviço"
        validate={required}
      />
    </SimpleForm>
  </Edit>
);
