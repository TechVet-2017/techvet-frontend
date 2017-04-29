import React from 'react';
import { Create } from 'admin-on-rest/lib/mui';
import { OwnerForm } from './OwnerForm';

export const OwnerCreate = props => (
  <Create title={'Cadastrar Proprietário'} {...props}>
    <OwnerForm />
  </Create>
);
