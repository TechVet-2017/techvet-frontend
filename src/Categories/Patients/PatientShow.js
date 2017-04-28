import React from 'react';
import {
  Show, SimpleShowLayout, DateField, TextField, 
} from 'admin-on-rest/lib/mui';

export const PatientShow = props => (
  <Show title={'Cadastro do Paciente'} {...props}>
    <SimpleShowLayout>
      <TextField
        value="off"
        source="patientName"
        label="Nome do Paciente"
      />
      <TextField
        source="species"
        label="Espécie"
        choices={[
        { id: 'Canino', name: 'Canino' },
        { id: 'Felino', name: 'Felino' },
        ]}
      />
      <TextField
        source="breed"
        label="Raça"
      />
      <TextField
        source="size"
        label="Tamanho"
        choices={[
        { id: 'Pequeno', name: 'Pequeno' },
        { id: 'Médio', name: 'Médio' },
        { id: 'Grande', name: 'Grande' },
        ]}
      />
      <TextField
        source="gender"
        label="Sexo"
        choices={[
        { id: 'Macho', name: 'Macho' },
        { id: 'Fêmea', name: 'Fêmea' },
        ]}
      />
      <DateField
        source="birthday"
        label="Data de Nascimento"
      />
      <TextField
        source="coat"
        label="Pelagem"
      />
    </SimpleShowLayout>
  </Show>
);
