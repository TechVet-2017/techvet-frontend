import React from 'react';
import {
  TextInput,
  SelectInput,
  SimpleForm,
  DisabledInput,
} from 'admin-on-rest/lib/mui';
import { AsyncValidate } from './AsyncValidate';
import {
  required,
  numeralCharactersQuantity,
  numeralCharactersMaxQuantity,
  numeralCharactersMinQuantity,
  validateCPF,
} from '../Validators';
import {
  formatCPF,
  formatPhoneNumber,
  formatZipCode,
} from '../Util';

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

export const OwnerForm = (props) => {
  let CPFField = null;
  if (!props.edit) {
    CPFField =
      (<TextInput
        source="cpf"
        label="CPF"
        validate={[required, numeralCharactersQuantity(11), validateCPF]}
        normalize={formatCPF}
      />);
  } else {
    CPFField =
      (<DisabledInput
        source="cpf"
        label="CPF"
      />);
  }
  return (
    <SimpleForm
      {...props}
      asyncValidate={AsyncValidate}
      asyncBlurFields={['zipCode']}
    >
      {CPFField}
      <TextInput
        source="ownerName"
        label="Primeiro Nome"
        validate={required}
      />
      <TextInput
        source="ownerLastName"
        label="Sobrenome"
        validate={required}
      />
      <TextInput
        source="phoneNumber"
        label="Telefone"
        validate={[required, numeralCharactersMinQuantity(10), numeralCharactersMaxQuantity(11)]}
        normalize={formatPhoneNumber}
      />
      <TextInput
        source="zipCode"
        label="Código Postal"
        normalize={formatZipCode}
        validate={numeralCharactersQuantity(8)}
      />
      <TextInput
        source="publicPlace"
        label="Endereço"
        validate={required}
      />
      <TextInput
        source="addressNumber"
        label="Número"
        validate={required}
      />
      <TextInput
        source="complement"
        label="Complemento"
      />
      <TextInput
        source="neighborhood"
        label="Bairro"
        validate={required}
      />
      <TextInput
        source="city"
        label="Cidade"
        validate={required}
      />
      <SelectInput
        source="district"
        label="Estado"
        choices={federalStates}
        validate={required}
      />
    </SimpleForm>
  );
};
