import React from 'react';
import {
  Show, SimpleShowLayout, TextField,
} from 'admin-on-rest/lib/mui';

export const OwnerShow = props => (
  <Show title={'Cadastro do Proprietário'} {...props}>
    <SimpleShowLayout>
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
        source="publicPlace"
        label="Endereço"
      />
      <TextField
        source="addressNumber"
        label="Número"
      />
      <TextField
        source="complement"
        label="Complemento"
      />
      <TextField
        source="neighborhood"
        label="Bairro"
      />
      <TextField
        source="city"
        label="Cidade"
      />
      <TextField
        source="district"
        label="Estado"
        choices={props.federalStates}
      />
    </SimpleShowLayout>
  </Show>
);
