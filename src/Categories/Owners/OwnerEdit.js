import React from 'react';
import {
  SelectInput, SimpleForm, TextInput, DisabledInput, Edit,
} from 'admin-on-rest/lib/mui';

const federalStates = [
  { id: 'AC', name: 'Acre (AC)' },
  { id: 'AL', name: 'Alagoas (AL)' },
  { id: 'AP', name: 'Amapá (AP)' },
  { id: 'AM', name: 'Amazonas (AM)' },
  { id: 'BA', name: 'Bahia (BA)' },
  { id: 'CE', name: 'Ceará (CE)' },
  { id: 'DF', name: 'Distrito Federal (DF)' },
  { id: 'ES', name: 'Espírito Santo (ES)' },
  { id: 'GO', name: 'Goiás (GO)' },
  { id: 'MA', name: 'Maranhão (MA)' },
  { id: 'MT', name: 'Mato Grosso (MT)' },
  { id: 'MS', name: 'Mato Grosso do Sul (MS)' },
  { id: 'MG', name: 'Minas Gerais (MG)' },
  { id: 'PA ', name: 'Pará (PA) ' },
  { id: 'PB', name: 'Paraíba (PB)' },
  { id: 'PR', name: 'Paraná (PR)' },
  { id: 'PE', name: 'Pernambuco (PE)' },
  { id: 'PI', name: 'Piauí (PI)' },
  { id: 'RJ', name: 'Rio de Janeiro (RJ)' },
  { id: 'RN', name: 'Rio Grande do Norte (RN)' },
  { id: 'RS', name: 'Rio Grande do Sul (RS)' },
  { id: 'RO', name: 'Rondônia (RO)' },
  { id: 'RR', name: 'Roraima (RR)' },
  { id: 'SC', name: 'Santa Catarina (SC)' },
  { id: 'SP', name: 'São Paulo (SP)' },
  { id: 'SE', name: 'Sergipe (SE)' },
  { id: 'TO', name: 'Tocantins (TO)' },
];

export const OwnerEdit = props => (
  <Edit title={`Proprietário ${props.record.ownerName}`} {...props}>
    <SimpleForm>
      <DisabledInput
        source="id"
        label="ID"
      />
      <DisabledInput
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
        source="publicPlace"
        label="Endereço"
      />
      <TextInput
        source="addressNumber"
        label="Número"
      />
      <TextInput
        source="complement"
        label="Complemento"
      />
      <TextInput
        source="neighborhood"
        label="Bairro"
      />
      <TextInput
        source="city"
        label="Cidade"
      />
      <SelectInput
        source="district"
        label="Estado"
        choices={federalStates}
      />
    </SimpleForm>
  </Edit>
);
