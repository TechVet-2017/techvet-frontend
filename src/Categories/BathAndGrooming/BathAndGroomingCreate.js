import React from 'react';
import { Create, LongTextInput, SimpleForm } from 'admin-on-rest/lib/mui';

const validationIsEmpty = (values) => {
  const errors = {};

  if (!values.serviceBathGrooming) {
    errors.serviceBathGrooming = ['Campo obrigatório'];
  } else if (values.serviceBathGrooming.length < 10) {
    errors.serviceBathGrooming = ['Campo muito pequeno'];
  } else if (values.serviceBathGrooming.length > 200) {
    errors.serviceBathGrooming = ['Campo muito longo'];
  }
  return errors;
};

export const BathAndGroomingCreate = props => (
  <Create {...props} title={'Adicionar Serviço'}>
    <SimpleForm validation={validationIsEmpty}>
      <LongTextInput source="serviceBathGrooming" label="Serviço" />
    </SimpleForm>
  </Create>
);
