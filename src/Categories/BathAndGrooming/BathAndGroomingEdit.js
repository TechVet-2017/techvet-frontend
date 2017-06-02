import React from 'react';
import {
  DisabledInput,
  LongTextInput,
  Edit,
  SimpleForm,
} from 'admin-on-rest/lib/mui';
// Global variables
import { minimumServiceLength, maximumServiceLength } from './index';

const validationIsEmpty = (values) => {
  const errors = {};

  if (!values.serviceBathGrooming) {
    errors.serviceBathGrooming = ['Campo obrigatório'];
  } else if (values.serviceBathGrooming.length < minimumServiceLength) {
    errors.serviceBathGrooming = ['Campo muito pequeno'];
  } else if (values.serviceBathGrooming.length > maximumServiceLength) {
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

