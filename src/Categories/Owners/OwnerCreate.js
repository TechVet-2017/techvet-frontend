import React, { Component } from 'react';
import $ from 'jquery';
import { change } from 'redux-form';
import {
  Create, SelectInput, SimpleForm, TextInput,
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

export class OwnerCreate extends Component {
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
            onChange={this.handleZipInput}
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
            source="Complement"
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
      </Create>
    );
  }
}
