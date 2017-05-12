import React from 'react';
import {
  FormTab,
  TextInput,
  NumberInput,
  LongTextInput,
  SelectInput,
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

export const ClinicalRecordCommonForm = props => (
  <FormTab {...props}>
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
);
