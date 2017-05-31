import React from 'react';
import { Create, LongTextInput, SimpleForm } from 'admin-on-rest/lib/mui';

const required = value => (value ? undefined : 'Campo obrigatório');

const maxfield = (value) => {
 if (value.length > 200){
  return 'Campo muito grande';
  }
  return null;
};

export const BathAndGroomingCreate = props => (
  <Create {...props} title={'Adicionar Serviço'}>
    <SimpleForm>
      <LongTextInput source="serviceBathGrooming" 
                     label="Serviço"
                     validate={[ required,maxfield ]} />
    </SimpleForm>
  </Create>
);