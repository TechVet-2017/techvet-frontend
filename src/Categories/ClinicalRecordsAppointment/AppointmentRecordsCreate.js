import React from 'react';
import {
  TabbedForm,
  FormTab,
  TextInput,
  NumberInput,
  LongTextInput,
  Create,
  SelectInput,
  ReferenceInput,
  AutocompleteInput,
} from 'admin-on-rest/lib/mui';

import AutoComplete from 'material-ui/AutoComplete';

const inlineStyle = {
  display: 'inline-block',
  marginRight: '50px',
};
const title = {
  fontSize: '20px',
  fontWeight: 'normal',
  marginBottom: '8px',
};

export const AppointmentRecordsCreate = props => (
  <Create {...props} title="Ficha de Consulta">
    <TabbedForm>
      <FormTab label="Informações do Paciente">
        <ReferenceInput label="Paciente" source="patientId" reference="patients" allowEmpty>
          <AutocompleteInput
            optionText="patientName"
            filter={AutoComplete.caseInsensitiveFilter}
            style={inlineStyle}
          />
        </ReferenceInput>
        <TextInput
          source="veterinarian"
          label="Atendido por Médico Veterinário"
          style={inlineStyle}
        />
        <TextInput source="veterinarianIdentification" label="Identificador" style={inlineStyle} />
        <h2 style={title}>Anamnese</h2>
        <LongTextInput source="anamnesis" label="Histórico da Doença" />
        <h2 style={title}>Histórico Clínico</h2>
        <LongTextInput source="clinicalHistory" label="Sinais Clínicos" />
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
        <NumberInput source="patientTemperature" label="Temperatura" />
        <NumberInput source="capillaryFill" label="TPC" />
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
        <NumberInput source="patientHeartRate" label="Frequência Cardíaca" />
        <NumberInput source="patientRespiratoryRate" label="Frequência Respiratória" />
        <NumberInput source="patientWeight" label="Peso" />
      </FormTab>
      <FormTab label="Situação Clínica">
        <LongTextInput source="observations" label="Observações" />
        <LongTextInput source="informations" label="Informações" />
        <TextInput source="exam" label="Exame" />
        <TextInput source="clinicalProcedure" label="Procedimento Clínico" />
        <LongTextInput source="diagnostic" label="Diagnóstico" />
        <SelectInput
          source="prognostic"
          label="Prognóstico"
          choices={[
            { id: 'favorable', name: 'Favorável' },
            { id: 'reserved', name: 'Reservado' },
            { id: 'unfavorable', name: 'Desfavorável' },
          ]}
        />
        <LongTextInput source="prognosticDetails" label="Detalhes do Prognóstico" />
      </FormTab>
      <FormTab label="Medicação">
        <TextInput source="preliminaryMedication" label="Medicamento Preliminar" />
        <NumberInput source="medicationDosage" label="Dosagem de Medicamento Preliminar" />
        <LongTextInput source="medicationFrequency" label="Frequência de Medicamento" />
        <LongTextInput source="homeMedicationName" label="Nome de Medicamento Domiciliar" />
        <LongTextInput source="homeMedicationDosage" label="Dosagem de Medicamento Domiciliar" />
        <LongTextInput
          source="homeMedicationFrequency" label="Frequência de Medicamento Domiciliar"
        />
        <LongTextInput source="clinicMedicationName" label="Nome de Medicamento Clínica" />
        <LongTextInput source="clinicMedicationDosage" label="Dosagem de Medicamento Clínica" />
        <LongTextInput
          source="clinicMedicationFrequency" label="Frequência de Medicamento Clínica"
        />
      </FormTab>
    </TabbedForm>
  </Create>
);
