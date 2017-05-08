import React from 'react';
import { SimpleList, Edit, EditButton, DisabledInput, LongTextInput, TextField, SimpleForm } from 'admin-on-rest/lib/mui';

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

export const BathAndGroomingEdit = props => (
  <Edit title={'Editar Serviço'} {...props}>
    <SimpleForm validation={validationIsEmpty}>
      <DisabledInput source="id" />
      <LongTextInput source="serviceBathGrooming" label="Serviço" />
    </SimpleForm>
  </Edit>
);