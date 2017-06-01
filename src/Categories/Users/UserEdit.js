import React from 'react';
import {
  Edit, SimpleForm, TextInput,
} from 'admin-on-rest/lib/mui';
import { TextInputValidation, UserName,
} from './Commons';

export const UserEdit = props => (
  <Edit title={<UserName />} {...props}>
    <SimpleForm>
      <TextInput
        source="userFullName"
        label="Nome Completo"
        validate={TextInputValidation}
      />
      <TextInput
        source="userName"
        label="Nome de Usuário"
        validate={TextInputValidation}
      />
      <TextInput
        type="password"
        source="userPassword"
        label="Senha"
        validate={TextInputValidation}
      />
    </SimpleForm>
  </Edit>
);
