import React from 'react';
import {
  Create,
  SimpleForm,
  DateInput,
  RadioButtonGroupInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from 'admin-on-rest/lib/mui';
import {
  required,
} from '../Validators';

export const PatientCreate = props => (
  <Create {...props} title={'Pacientes'}>
    <SimpleForm>
      <ReferenceInput
        label="Dono"
        source="patientOwnerId"
        reference="owners"
        validate={required}
        allowEmpty
      >
        <SelectInput
          optionText="ownerName"
        />
      </ReferenceInput>
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
      />
      <TextInput
        source="breed"
        label="Raça"
        validate={required}
      />
      <RadioButtonGroupInput
        source="size"
        validate={required}
        label="Tamanho"
        choices={[
        { id: 'Pequeno', name: 'Pequeno' },
        { id: 'Médio', name: 'Médio' },
        { id: 'Grande', name: 'Grande' },
        ]}
      />
      <RadioButtonGroupInput
        source="gender"
        validate={required}
        label="Sexo"
        choices={[
        { id: 'Macho', name: 'Macho' },
        { id: 'Fêmea', name: 'Fêmea' },
        ]}
      />
      <DateInput
        source="birthday"
        label="Data de Nascimento"
        options={{
          mode: 'landscape',
          minDate: new Date(1985, 12 - 1, 31),
          maxDate: new Date(),
          hintText: 'Data de Nascimento',
          cancelLabel: 'Cancelar',
          locale: 'pt',
        }}
        validate={required}
      />
      <TextInput
        source="coat"
        label="Pelagem"
        validate={required}
      />
    </SimpleForm>
  </Create>
);
