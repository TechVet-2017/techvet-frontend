import React from 'react';
import {
  SimpleForm, TextInput, DateInput, RadioButtonGroupInput, Edit,
} from 'admin-on-rest/lib/mui';
import {
  required,
} from '../Validators';

export const PatientEdit = props => (
  <Edit title={'Cadastro do Paciente'} {...props}>
    <SimpleForm>
      <TextInput
        source="patientName"
        label="Nome do Paciente"
        validate={required}
        
      />
      <RadioButtonGroupInput
        source="species"
        label="Espécie"
        choices={[
        { id: 'Canino', name: 'Canino' },
        { id: 'Felino', name: 'Felino' },
        ]}
        validate={required}
      />
      <TextInput
        source="breed"
        label="Raça"
        validate={required}
      />
      <RadioButtonGroupInput
        source="size"
        label="Tamanho"
        choices={[
        { id: 'Pequeno', name: 'Pequeno' },
        { id: 'Médio', name: 'Médio' },
        { id: 'Grande', name: 'Grande' },
        ]}
        validate={required}
      />
      <RadioButtonGroupInput
        source="gender"
        label="Sexo"
        choices={[
        { id: 'Macho', name: 'Macho' },
        { id: 'Fêmea', name: 'Fêmea' },
        ]}
        validate={required}
      />
      <DateInput
        source="birthday"
        label="Data de Nascimento"
        options={{
          mode: 'landscape',
          minDate: new Date(1985, 12-1, 31),
          maxDate: new Date(),
          hintText: 'Data de Nascimento',
          cancelLabel: 'Cancelar',
          locale: 'pt',
        }}
      />
      <TextInput
        source="coat"
        label="Pelagem"
        validate={required}
      />
    </SimpleForm>
  </Edit>
);