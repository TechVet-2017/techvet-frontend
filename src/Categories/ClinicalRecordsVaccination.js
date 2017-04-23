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
  SelectInput,
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

const inlineStyle = {
  display: 'inline-block',
  marginRight: '50px',
};
const title = {
  fontSize: '20px',
  fontWeight: 'normal',
  marginBottom: '8px',
};
export const VaccinationRecordsCreate = props => (
  <Create title="Cadastro Ficha Médica Vacinação" {...props}>
    <SimpleForm>
      <TextInput
        source="veterinarian"
        label="Atendido por Médico Veterinário"
        style={inlineStyle}
      />
      <TextInput source="veterinarianIdentification" label="Identificador" style={inlineStyle} />
      <h2 style={title}>Anamnese</h2>
      <LongTextInput source="anamnesis" label="Histórico da Doença" />
      <h2 style={title}>Exame Físico</h2>
      <SelectInput
        source="hydrationState"
        label="Estado de Hidratação"
        choices={[
        { id: 'hidratado', name: 'Hidratado' },
        { id: '???', name: '???' },
        { id: 'desidratado', name: 'Desidratado' },
        ]}
      />
      <NumberInput source="patientTemperature" label="Temperatura" />
      <NumberInput source="capillaryFill" label="TPC" />
      <TextInput source="patientPulse" label="Pulso do Paciente" />
      <TextInput source="bloodPressure" label="PAS" />
      <SelectInput
        source="mucosasApparent"
        label="Mucosas Aparentes"
        choices={[
        { id: 'normoCorada', name: 'Normo Corada' },
        { id: '??', name: '??' },
        { id: 'heh?', name: 'heh?' },  
        ]}
      />
      <NumberInput source="patientRespiratoryRate" label="Frequência Respiratória" />
      <NumberInput source="patientHeartRate" label="Frequência Cardíaca" />
      <h2 style={title}>Vacinação</h2>
      <DateInput source="vaccinationApplicationDate" label="Data da Aplicação" />
      <SelectInput
        source="vaccinationName"
        label="vacina"
        choices={[
         { id: 'vanguardPlusmonthly', name: 'Vanguard Plus Mensal' },
         { id: 'vacina', name: 'Vacina' },
         { id: 'nomeVacina', name: 'Nome de Vacina' },
        ]}
      />
      <SelectInput
        source="vaccinationLaboratory"
        label="Laboratório"
        choices={[
         { id: 'pfizer', name: 'Pfizer' },
         { id: 'dexter', name: 'Laboratório de Dexter' },
         { id: 'sabin', name: 'Sabin' },
        ]}
      />
      <DateInput source="vaccinationReturnDate" label="Data de Retorno" />
      <h2 style={title}>Vermifugação</h2>
      <DateInput source="vermifugationApplicationDate" label="Data da Aplicação" />
      <TextInput source="vermifugeName" label="Vermífugo" />
      <NumberInput source="patientWeight" label="Peso" />
      <TextInput source="vermifugeDosage" label="Dose" />
      <DateInput source="vermifugationReturnDate" label="Data de Retorno" />
    </SimpleForm>
  </Create>
);
