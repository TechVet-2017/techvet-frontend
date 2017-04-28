import React from 'react';
import { List, Responsive, SimpleList, Edit, Create, Datagrid, TextField, Filter, EditButton, DeleteButton, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest/lib/mui';

const UserFilter = props => (
  <Filter {...props}>
    <TextInput
      label="Pesquisar"
      source="userFullName"
      alwaysOn
    />
    <ReferenceInput label="Usuário" source="id" reference="users" allowEmpty>
      <SelectInput
        source="id"
        optionText="userName"
      />
    </ReferenceInput>
  </Filter>
);

const TextInputValidation = (value) => {
  if (!value) {
    return ['Campo obrigatório'];
  }
  return [];
};

export const UserList = props => (
  <List {...props} filters={<UserFilter />} title={'Lista de Usuários'}>
    <Responsive
      small={
        <SimpleList
          primaryText={user => `ID: ${user.id}`}
          secondaryText={user => `Nome de Usuário: ${user.userName}`}
          tertiaryText={user => `Nome Completo: ${user.userFullName}`}
        />
    }
      medium={
        <Datagrid>
          <TextField
            source="id"
            label="ID"
          />
          <TextField
            source="userFullName"
            label="Nome Completo"
          />
          <TextField
            source="userName"
            label="Nome de Usuário"
          />
          <EditButton />
          <DeleteButton />
        </Datagrid>
    }
    />
  </List>
);

export const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput
        source="userFullName"
        label="Nome Completo"
        validation={TextInputValidation}
      />
      <TextInput
        source="userName"
        label="Nome de Usuário"
        validation={TextInputValidation}
      />
      <TextInput
        type="password"
        source="userPassword"
        label="Senha"
        validation={TextInputValidation}
      />
    </SimpleForm>
  </Create>
);

const UserName = ({ user }) => {
  return <span>Usuário {user ? `"${user.userName}"` : ''}</span>;
};

export const UserEdit = props => (
  <Edit title={<UserName />} {...props}>
    <SimpleForm>
      <TextInput
        source="userFullName"
        label="Nome Completo"
        validation={TextInputValidation}
      />
      <TextInput
        source="userName"
        label="Nome de Usuário"
        validation={TextInputValidation}
      />
      <TextInput
        type="password"
        source="userPassword"
        label="Senha"
        validation={TextInputValidation}
      />
    </SimpleForm>
  </Edit>
);
