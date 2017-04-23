import React from 'react';
import {
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  List,
  Edit,
  Create,
  DateInput,
  TextInput,
  SimpleForm,
  LongTextInput,
  NumberInput,
} from 'admin-on-rest/lib/mui';

export const VaccinationRecordsList = props => (

  <List {...props} title={'Vacinações'}>
    <Datagrid>
      <TextField source="veterinarian" label="Paciente" />
      <TextField source="veterinarian" label="Veterinário" />
      <TextField source="anamnesis" label="Anamnese" />
      <TextField source="vaccinationName" label="Vacina" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const VaccinationRecordsEdit = props => (
  <Edit title="Ficha de Vacinação" {...props}>
    <SimpleForm>
      <DateInput source="vaccinationApplicationDate" label="Data da Vacinação" />
      <TextInput source="vaccinationName" label="Vacina" />
      <DateInput source="vaccinationReturnDate" label="Data de Retorno" />
      <TextInput source="vaccinationLaboratory" label="Laboratório da Vacina" />
      <DateInput source="vermifugationApplicationDate" label="Data de Vermifugação" />
      <TextInput source="vermifugeName" label="Nome do Vermífugo" />
      <TextInput source="vermifugeDosage" label="Dosagem do Vermífugo" />
      <DateInput source="vermifugationReturnDate" label="Data de Retorno do Vermífugo" />

      <LongTextInput source="anamnesis" label="Anamnese" />
      <TextInput source="veterinarian" label="Veterinário" />
      <TextInput source="clinicalHistory" label="Histórico Médico" />
      <LongTextInput source="diagnosis" label="Diagnose?" />
      <NumberInput source="patientTemperature" label="Temperatura do Paciente" />
      <NumberInput source="capillaryFill" label="Nem Sei" />
      <TextInput source="patientPulse" label="Pulso do Paciente" />
      <TextInput source="mucosasApparent" label="Mucosas Aparentes" />
      <NumberInput source="patientRespiratoryRate" label="Frequência Respiratória" />
      <NumberInput source="patientHeartRate" label="Frequência Cardíaca" />
      <NumberInput source="patientWeight" label="Peso" />
    </SimpleForm>
  </Edit>
);

export const VaccinationRecordsCreate = props => (
  <Create title="Criar Ficha de Vacinação" {...props}>
    <SimpleForm>
      <DateInput source="vaccinationApplicationDate" label="Data da Vacinação" />
      <TextInput source="vaccinationName" label="Vacina" />
      <DateInput source="vaccinationReturnDate" label="Data de Retorno" />
      <TextInput source="vaccinationLaboratory" label="Laboratório da Vacina" />
      <DateInput source="vermifugationApplicationDate" label="Data de Vermifugação" />
      <TextInput source="vermifugeName" label="Nome do Vermífugo" />
      <TextInput source="vermifugeDosage" label="Dosagem do Vermífugo" />
      <DateInput source="vermifugationReturnDate" label="Data de Retorno do Vermífugo" />

      <LongTextInput source="anamnesis" label="Anamnese" />
      <TextInput source="veterinarian" label="Veterinário" />
      <TextInput source="clinicalHistory" label="Histórico Médico" />
      <LongTextInput source="diagnosis" label="Diagnose?" />
      <NumberInput source="patientTemperature" label="Temperatura do Paciente" />
      <NumberInput source="capillaryFill" label="Nem Sei" />
      <TextInput source="patientPulse" label="Pulso do Paciente" />
      <TextInput source="mucosasApparent" label="Mucosas Aparentes" />
      <NumberInput source="patientRespiratoryRate" label="Frequência Respiratória" />
      <NumberInput source="patientHeartRate" label="Frequência Cardíaca" />
      <NumberInput source="patientWeight" label="Peso" />
    </SimpleForm>
  </Create>
);