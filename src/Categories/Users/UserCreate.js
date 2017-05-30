import React from 'react';
import {
  Create, SimpleForm, TextInput,
} from 'admin-on-rest/lib/mui';
import {TextInputValidation,NameValidation,
} from './Commons';

export const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput
        source="userFullName"
        label="Nome Completo"
        validate={[TextInputValidation, NameValidation]}
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
  </Create>
);
