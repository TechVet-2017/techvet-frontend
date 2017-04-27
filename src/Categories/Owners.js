import React, { Component } from 'react';
import $ from 'jquery';
import { change } from 'redux-form';
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
  constructor(props) {
    super(props);
    this.handleZipInput = this.handleZipInput.bind(this);
  }
  handleZipInput(event) {
    const zipCode = event.target.value;
    if (zipCode.length === 8) {
      $.ajax({
        url: `http://correiosapi.apphb.com/cep/${zipCode}`,
        dataType: 'jsonp',
        crossDomain: true,
        contentType: 'application/json',
        statusCode: {
          200: (data) => {
            // console.log(data);
            this.form.dispatchProps.dispatch(
              change(
                'record-form',
                'publicPlace',
                `${data.tipoDeLogradouro} ${data.logradouro}`),
            );
            this.form.dispatchProps.dispatch(
              change(
                'record-form',
                'neighborhood',
                data.bairro,
              ),
            );
            this.form.dispatchProps.dispatch(
              change(
                'record-form',
                'city',
                data.cidade,
              ),
            );
            this.form.dispatchProps.dispatch(
              change(
                'record-form',
                'district',
                data.estado,
              ),
            );
          },
          400: () => { },
          404: () => { },
        },
      });
    }
  }
  render() {
    return (
      <Create {...this.props}>
        <SimpleForm ref={(form) => { this.form = form; }}>
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
            onChange={this.handleZipInput}
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
