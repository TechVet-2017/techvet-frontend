import React, { Component } from 'react';
import $ from 'jquery';
import { change } from 'redux-form';
import { formatCPF, formatPhoneNumber } from '../Util';
import {
  TextInput,
  SelectInput,
  SimpleForm,
  DisabledInput,
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

const required = value => (value ? undefined : 'Campo obrigatório');

export class OwnerForm extends Component {
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
            this.form.store.dispatch(
              change(
                'record-form',
                'publicPlace',
                `${data.tipoDeLogradouro} ${data.logradouro}`),
            );
            this.form.store.dispatch(
              change(
                'record-form',
                'neighborhood',
                data.bairro,
              ),
            );
            this.form.store.dispatch(
              change(
                'record-form',
                'city',
                data.cidade,
              ),
            );
            this.form.store.dispatch(
              change(
                'record-form',
                'district',
                data.estado,
              ),
            );
            this.form.store.dispatch(
              change(
                'record-form',
                'addressNumber',
                '',
              ),
            );
            this.form.store.dispatch(
              change(
                'record-form',
                'complement',
                '',
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
    let CPFField = null;
    if (!this.props.edit) {
      CPFField =
        <TextInput
          source="cpf"
          label="CPF"
          validate={required}
          normalize={formatCPF}
        />;
    } else {
      CPFField =
        <DisabledInput
          source="cpf"
          label="CPF"
      />;
    }
    return (    
      <SimpleForm ref={(form) => { this.form = form; }} {...this.props}>
        { CPFField }
        
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
          validate={required}
          normalize={formatPhoneNumber}
        />
        <TextInput
          source="zipCode"
          label="Código Postal"
          onChange={this.handleZipInput}
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
  }
}