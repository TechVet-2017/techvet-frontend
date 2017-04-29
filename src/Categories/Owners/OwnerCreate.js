import React from 'react';
import { OwnerForm } from './OwnerForm';
import { Create } from 'admin-on-rest/lib/mui';



export const OwnerCreate = (props) => (
  <Create title={'Cadastrar Proprietário'} {...props}>
    <OwnerForm />
  </Create>
);
