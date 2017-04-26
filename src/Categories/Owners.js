import React, { Component } from 'react';
import $ from 'jquery';
import {
  List, Responsive, SimpleList, Edit, Show, ShowButton, Create,
  Datagrid, TextField, Filter, EditButton, DeleteButton, ReferenceInput,
  SelectInput, SimpleForm, SimpleShowLayout, TextInput, DisabledInput,
} from 'admin-on-rest/lib/mui';

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

const federalStates = [
  { id: 'Acre (AC)', name: 'Acre (AC)' },
  { id: 'Alagoas (AL)', name: 'Alagoas (AL)' },
  { id: 'Amapá (AP)', name: 'Amapá (AP)' },
  { id: 'Amazonas (AM)', name: 'Amazonas (AM)' },
  { id: 'Bahia (BA)', name: 'Bahia (BA)' },
  { id: 'Ceará (CE)', name: 'Ceará (CE)' },
  { id: 'Distrito Federal (DF)', name: 'Distrito Federal (DF)' },
  { id: 'Espírito Santo (ES)', name: 'Espírito Santo (ES)' },
  { id: 'Goiás (GO)', name: 'Goiás (GO)' },
  { id: 'Maranhão (MA)', name: 'Maranhão (MA)' },
  { id: 'Mato Grosso (MT)', name: 'Mato Grosso (MT)' },
  { id: 'Mato Grosso do Sul (MS)', name: 'Mato Grosso do Sul (MS)' },
  { id: 'Minas Gerais (MG)', name: 'Minas Gerais (MG)' },
  { id: 'Pará (PA) ', name: 'Pará (PA) ' },
  { id: 'Paraíba (PB)', name: 'Paraíba (PB)' },
  { id: 'Paraná (PR)', name: 'Paraná (PR)' },
  { id: 'Pernambuco (PE)', name: 'Pernambuco (PE)' },
  { id: 'Piauí (PI)', name: 'Piauí (PI)' },
  { id: 'Rio de Janeiro (RJ)', name: 'Rio de Janeiro (RJ)' },
  { id: 'Rio Grande do Norte (RN)', name: 'Rio Grande do Norte (RN)' },
  { id: 'Rio Grande do Sul (RS)', name: 'Rio Grande do Sul (RS)' },
  { id: 'Rondônia (RO)', name: 'Rondônia (RO)' },
  { id: 'Roraima (RR)', name: 'Roraima (RR)' },
  { id: 'Santa Catarina (SC)', name: 'Santa Catarina (SC)' },
  { id: 'São Paulo (SP)', name: 'São Paulo (SP)' },
  { id: 'Sergipe (SE)', name: 'Sergipe (SE)' },
  { id: 'Tocantins (TO)', name: 'Tocantins (TO)' },
];

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

class OwnerCreateTest extends Component {
  componentDidMount() {
    const zipCodeInput = document.getElementsByName('zipCode')[0];
    const publicPlaceInput = document.getElementsByName('publicPlace')[0];
    const addressNumberInput = document.getElementsByName('addressNumber')[0];
    const neighborhoodInput = document.getElementsByName('neighborhood')[0];
    const cityInput = document.getElementsByName('city')[0];
    const districtInput = document.getElementsByName('district')[0];
    const {record} = this.props;
    console.log(record);
    zipCodeInput.oninput = () => {
      if (zipCodeInput.value.length === 8) {
        $.ajax({
          url: 'http://correiosapi.apphb.com/cep/' + zipCodeInput.value,
          dataType: 'jsonp',
          crossDomain: true,
          contentType: 'application/json',
          statusCode: {
            200: (data) => {
              publicPlaceInput.value = data.logradouro;
             },
            400: (msg) => { console.log(msg); },
            404: () => { console.log('CEP não encontrado!!'); },
          },
        });
      } else {
        console.log(zipCodeInput.value.length);
      }
    };
  }
  render() {
    return (
      <Create {...this.props}>
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
            source="publicPlace"
            label="Endereço"
            validation={TextInputValidation}
          />
          <TextInput
            source="addressNumber"
            label="Número"
            validation={TextInputValidation}
          />
          <TextInput
            source="neighborhood"
            label="Bairro"
            validation={TextInputValidation}
          />
          <TextInput
            source="city"
            label="Cidade"
            validation={TextInputValidation}
          />
          <SelectInput
            source="district"
            label="Estado"
            choices={federalStates}
            validation={TextInputValidation}
          />
        </SimpleForm>
      </Create>
    );
  }
}

export const OwnerCreate = OwnerCreateTest;

const OwnerName = ({ record }) => {
  return <span>Proprietário {record ? `"${record.ownerName}"` : ''}</span>;
};

export const OwnerEdit = props => (
  <Edit title={<OwnerName />} {...props}>
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
        source="publicPlace"
        label="Endereço"
        validation={TextInputValidation}
      />
      <TextInput
        source="addressNumber"
        label="Número"
        validation={TextInputValidation}
      />
      <TextInput
        source="neighborhood"
        label="Bairro"
        validation={TextInputValidation}
      />
      <TextInput
        source="city"
        label="Cidade"
        validation={TextInputValidation}
      />
      <SelectInput
        source="district"
        label="Estado"
        choices={federalStates}
        validation={TextInputValidation}
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
        source="publicPlace"
        label="Endereço"
      />
      <TextField
        source="addressNumber"
        label="Número"
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
        choices={federalStates}
      />
    </SimpleShowLayout>
  </Show>
);
