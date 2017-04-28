import React from 'react';
import { List, Responsive, Filter, ReferenceInput, Show, SimpleList, Edit, DateInput, RadioButtonGroupInput, Create, Datagrid, TextField, EditButton, DeleteButton, SimpleForm, TextInput, ShowButton, SimpleShowLayout, DateField } from 'admin-on-rest/lib/mui';


const PatientFilter = props => (
  <Filter {...props}>
    <TextInput label="Pesquisar" source="patientName" alwaysOn/>
    <ReferenceInput label="Nome do Paciente" source="patientName" reference="Nome do Paciente"  allowEmpty>
    </ReferenceInput>
  </Filter>
);

const required = value => (value ? undefined : 'Campo obrigatório');

export const PatientList = props => (
  <List {...props} filters={<PatientFilter />}title={'Pacientes'}>
    <Responsive
      small={
        <SimpleList
          primaryText={patient => `Nome: ${patient.patientName}`}
          secondaryText={patient => patient.breed}
          tertiaryText={patient => patient.species}
        />
      }
      medium={
        <Datagrid>
          <TextField source="id" label="RG BD Nº" />
          <TextField source="patientName" label="Nome do Paciente" />
          <TextField source="species" label="Espécie" />
          <TextField source="breed" label="Raça" />
          <ShowButton />
          <EditButton />
          <DeleteButton />
        </Datagrid>
      }
    />
  </List>
);

const PatientTitle = ({ record }) => {
  return <span>Paciente {record ? `"${record.patientName}"` : ''}</span>;
};

export const PatientEdit = props => (
  <Edit title={<PatientTitle />} {...props}>
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

export const PatientCreate = props => (
  <Create {...props} title={'Pacientes'}>
    <SimpleForm>
      <TextInput
        source="patientName"
        label="Nome do Paciente"
        validate={required}
      />
      <RadioButtonGroupInput
        source="species"
        validate={required}
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
          maxDate: new Date(),
          hintText: 'Data de Nascimento',
          cancelLabel: 'Cancelar',
          locale: 'pt',
        }}
        validate={required}
      />
        <TextInput
        source="coat"
        label="Raça"
        validate={required}
      />
    </SimpleForm>
  </Create>
);

export const PatientShow = props => (
  <Show title={<PatientTitle />} {...props}>
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
