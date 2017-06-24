import React from 'react';
import {
  Edit,
  DateInput,
  TextInput,
  SelectInput,
  TabbedForm,
  FormTab,
  NumberInput,
  ReferenceInput,
  LongTextInput,
} from 'admin-on-rest/lib/mui';

const inlineStyle = {
  display: 'inline-block',
  marginRight: '50px',
};
const title = {
  fontSize: '20px',
  fontWeight: 'normal',
  marginBottom: '8px',
};

const vaccines = [
  { id: '1', name: 'Vanguard Plus (ou V10 ou Déctupla) - 21 dias' },
  { id: '2', name: 'Vanguard Plus Mensal (ou V10 ou Déctupla)' },
  { id: '3', name: 'Vanguard Plus Intermediária (ou V10 ou Déctupla)' },
  { id: '4', name: 'Vanguard Plus Anual (ou V10 ou Déctupla)' },
  { id: '5', name: 'Bronchi-guard - 21 dias' },
  { id: '6', name: 'Bronchi-guard Mensal' },
  { id: '7', name: 'Bronchi-guard Intermediária' },
  { id: '8', name: 'Bronchi-guard Anual' },
  { id: '9', name: 'Defensor - 21 dias' },
  { id: '10', name: 'Defensor Mensal' },
  { id: '11', name: 'Defensor Intermediária' },
  { id: '12', name: 'Defensor Anual' },
  { id: '13', name: 'GiardiaVax - 21 dias' },
  { id: '14', name: 'GiardiaVax Mensal' },
  { id: '15', name: 'GiardiaVax Intermediária' },
  { id: '16', name: 'GiardiaVax Anual' },
  { id: '17', name: 'FeloCell (ou Quádrupla felina) - 21 dias' },
  { id: '18', name: 'FeloCell Mensal (ou Quádrupla felina)' },
  { id: '19', name: 'FeloCell Intermediária (ou Quádrupla felina)' },
  { id: '20', name: 'FeloCell Anual (ou Quádrupla felina)' },
  { id: '21', name: 'Fel-O-Vax (ou Quíntupla felina) - 21 dias' },
  { id: '22', name: 'Fel-O-Vax Mensal (ou Quíntupla felina)' },
  { id: '23', name: 'Fel-O-Vax Intermediária (ou Quíntupla felina)' },
  { id: '24', name: 'Fel-O-Vax Anual (ou Quíntupla felina)' },
  { id: '25', name: 'Leish-Tec - 21 dias' },
  { id: '26', name: 'Leish-Tec Mensal' },
  { id: '27', name: 'Leish-Tec Intermediária' },
  { id: '28', name: 'Leish-Tec Anual' },
];

export const VaccinationRecordsEdit = props => (
  <Edit title="Ficha de Vacinação" {...props}>
    <TabbedForm>
      <FormTab label="Informações do Paciente">
        <h2 style={title}>Paciente</h2>
        <ReferenceInput label="Paciente" source="patientId" reference="patients" allowEmpty>
          <SelectInput
            optionText="patientName"
            style={inlineStyle} 
          />
        </ReferenceInput>
        <TextInput
          source="veterinarian"
          label="Atendido por Médico Veterinário"
          style={inlineStyle}
        />
        <TextInput 
          source="veterinarianIdentification" 
          label="Identificador" 
          style={inlineStyle} 
        />
        <h2 style={title}>Anamnese</h2>
        <LongTextInput 
          source="anamnesis" 
          label="Histórico da Doença" 
        />
        <h2 style={title}>Histórico Clínico</h2>
        <LongTextInput 
          source="clinicalHistory" 
          label="Sinais Clínicos" 
        />
        <h2 style={title}>Exame Físico</h2>
        <SelectInput
          source="hydrationState"
          label="Estado de Hidratação"
          choices={[
            { id: 'hidratado', name: 'Hidratado' },
            { id: 'levemente desidratado', name: 'Levemente Desidratado' },
            { id: 'desidratado', name: 'Desidratado' },
          ]}
        />
        <NumberInput 
          source="patientTemperature" 
          label="Temperatura" 
        />
        <NumberInput 
          source="capillaryFill" 
          label="TPC" 
        />
        <SelectInput
          source="patientPulse"
          label="Pulso do Paciente"
          choices={[
            { id: 'forteSincrono', name: 'Forte e Síncrono' },
            { id: 'fracoAssincrono', name: 'Fraco e Assíncrono' },
          ]}
        />
        <TextInput source="lymphnodes" label="Linfonodos" />
        <NumberInput source="bloodPressure" label="PAS" />
        <SelectInput
          source="mucosasApparent"
          label="Mucosas Aparentes"
          choices={[
            { id: 'normoCorada', name: 'Normo Corada' },
            { id: 'hipoCorada', name: 'Hipo Corada' },
            { id: 'hiperCorada', name: 'Hiper Corada' },
          ]}
        />
        <NumberInput 
          source="patientHeartRate" 
          label="Frequência Cardíaca" 
        />
        <NumberInput 
          source="patientRespiratoryRate" 
          label="Frequência Respiratória" 
        />
        <NumberInput 
          source="patientWeight" 
          label="Peso" 
        />
      </FormTab>
      <FormTab label="Vacinação">
        <DateInput
          source="vaccinationApplicationDate"
          label="Data da Aplicação"
          options={{
            mode: 'landscape',
            maxDate: new Date(),
            hintText: 'Data da aplicação',
            cancelLabel: 'Cancelar',
            locale: 'pt',
          }}
        />
        <SelectInput
          source="vaccinationName"
          label="Vacina"
          choices={vaccines}
        />
        <SelectInput
          source="vaccinationLaboratory"
          label="Laboratório"
          choices={[
            { id: 'Pfizer', name: 'Pfizer' },
            { id: 'Zoetis', name: 'Zoetis' },
            { id: 'Fort', name: 'Fort' },
            { id: 'Dodge', name: 'Dodge' },
            { id: 'Hertape', name: 'Hertape' },
          ]}
        />
        <DateInput
          source="vaccinationReturnDate"
          label="Data de Retorno"
          options={{
            mode: 'landscape',
            minDate: new Date(),
            hintText: 'Data de retorno',
            cancelLabel: 'Cancelar',
            locale: 'pt',
          }}
        />
      </FormTab>
      <FormTab label="Vermifugação">
        <DateInput
          source="vermifugationApplicationDate"
          label="Data da Aplicação"
          options={{
            mode: 'landscape',
            maxDate: new Date(),
            hintText: 'Data da aplicação',
            cancelLabel: 'Cancelar',
            locale: 'pt',
          }}
        />
        <TextInput 
          source="vermifugeName" 
          label="Vermífugo" 
        />
        <TextInput 
          source="vermifugeDosage" 
          label="Dose" 
          step={0.1} 
        />
        <DateInput
          source="vermifugationReturnDate"
          label="Data de Retorno"
          options={{
            mode: 'landscape',
            minDate: new Date(),
            hintText: 'Data de retorno',
            cancelLabel: 'Cancelar',
            locale: 'pt',
          }}
        />
      </FormTab>
    </TabbedForm>
  </Edit>
);
