import React from 'react';
import { Edit, DisabledInput, LongTextInput, SimpleForm } from 'admin-on-rest/lib/mui';

const required = value => (value ? undefined : 'Campo obrigatório');

const maxfield = (value) => {
 if (value.length > 200){
  return 'Campo muito grande';
  }
  return null;
};

export const BathAndGroomingEdit = props => (
  <Edit title={'Editar Serviço'} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <LongTextInput source="serviceBathGrooming" 
                     label="Serviço"
                     validate={[ required, maxfield ]} />
    </SimpleForm>
  </Edit>
);