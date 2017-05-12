import React from 'react';
import { Edit } from 'admin-on-rest/lib/mui';
import { OwnerForm } from './OwnerForm';

export const OwnerEdit = props => (
  <Edit title={'Editar Proprietário'} {...props}>
    <OwnerForm edit />
  </Edit>
);

