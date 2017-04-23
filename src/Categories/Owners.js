import React from 'react';
import { List, Responsive, SimpleList, Edit, Show, ShowButton, Create,
Datagrid, TextField, Filter, EditButton, DeleteButton, ReferenceInput,
SelectInput, SimpleForm, SimpleShowLayout, TextInput } from 'admin-on-rest/lib/mui';

const OwnerFilter = props => (
  <Filter {...props}>
    <TextInput
      label="Pesquisar"
      source="q"
      alwaysOn
    />
    <ReferenceInput label="Proprietário" source="id" reference="owner" allowEmpty>
      <SelectInput
        source="id"
        optionText="ownerName"
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

export const OwnerList = props => (
  <List {...props} filters={<OwnerFilter />} title={'Lista de proprietários'}>
    <Responsive
      small={
        <SimpleList
          primaryText={owner => `Nome: ${owner.ownerName}`}
          secondaryText={owner => `Sobrenome: ${owner.lastName}`}
          tertiaryText={owner => `Telefone: ${owner.phoneNumber}`}
        />
    }
      medium={
        <Datagrid>
          <TextField
            source="id"
            label="ID"
          />
          <TextField
            source="ownerName"
            label="Nome"
          />
          <TextField
            source="ownerLastName"
            label="Sobrenome"
          />
          <TextField
            source="phoneNumber"
            label="Telefone"
          />
          <ShowButton />
          <EditButton />
          <DeleteButton />
        </Datagrid>
    }
    />
  </List>
);
export const OwnerCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput
        source="cpf"
        label="CPF"
        validation={TextInputValidation}
      />
      <TextInput
        source="ownerName"
        label="Primeiro Nome"
        validation={TextInputValidation}
      />
      <TextInput
        source="ownerLastName"
        label="Sobrenome"
        validation={TextInputValidation}
      />
      <TextInput
        source="phoneNumber"
        label="Telefone"
        validation={TextInputValidation}
      />
      <TextInput
        source="zipCode"
        label="Código Postal"
        validation={TextInputValidation}
      />
      <TextInput
        source="district"
        label="Estado"
        validation={TextInputValidation}
      />
      <TextInput
        source="publicPlace"
        label="Endereço"
        validation={TextInputValidation}
      />
      <TextInput
        source="addressNumber"
        label="Número"
        validation={TextInputValidation}
      />
    </SimpleForm>
  </Create>
);

const OwnerName = ({ owner }) => {
  return <span>Proprietário {owner ? `"${owner.ownerName}"` : ''}</span>;
};

export const OwnerEdit = props => (
  <Edit title={<OwnerName />} {...props}>
    <SimpleForm>
      <TextInput
        source="id"
        label="ID"
      />
      <TextInput
        source="cpf"
        label="CPF"
      />
      <TextInput
        source="ownerName"
        label="Primeiro Nome"
      />
      <TextInput
        source="ownerLastName"
        label="Sobrenome"
      />
      <TextInput
        source="phoneNumber"
        label="Telefone"
      />
      <TextInput
        source="zipCode"
        label="Código Postal"
      />
      <TextInput
        source="district"
        label="Estado"
      />
      <TextInput
        source="publicPlace"
        label="Endereço"
      />
      <TextInput
        source="addressNumber"
        label="Número"
      />
    </SimpleForm>
  </Edit>
);


export const OwnerShow = props => (
  <Show title={<OwnerName />} {...props}>
    <SimpleShowLayout>
      <TextField
        source="id"
        label="ID"
      />
      <TextField
        source="cpf"
        label="CPF"
      />
      <TextField
        source="ownerName"
        label="Primeiro Nome"
      />
      <TextField
        source="ownerLastName"
        label="Sobrenome"
      />
      <TextField
        source="phoneNumber"
        label="Telefone"
      />
      <TextField
        source="zipCode"
        label="Código Postal"
      />
      <TextField
        source="district"
        label="Estado"
      />
      <TextField
        source="publicPlace"
        label="Endereço"
      />
      <TextField
        source="addressNumber"
        label="Número"
      />
    </SimpleShowLayout>
  </Show>
);
