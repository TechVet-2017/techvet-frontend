import React from 'react';
import { 
	Datagrid, 
	TextField,
	EditButton,
	DeleteButton,
	List,
	TabbedForm,
	FormTab,
	TextInput,
	NumberInput,
	LongTextInput,
	Edit,
	Create,
	SimpleForm,
} from 'admin-on-rest/lib/mui';

export const AppointmentRecordsList = (props) => (

 	<List {...props} title={'Consultas'}>
		<Datagrid>
	        <TextField source="veterinarian" label="Paciente" />
	        <TextField source="veterinarian" label="Veterinário" />
		    <TextField source="anamnesis" label="Anamnese" />
			<TextField source="exam" label="Exame" />
	        <EditButton />
	        <DeleteButton />
	    </Datagrid>
	</List>
);

export const AppointmentRecordsEdit = (props) => (
	<Edit title="Ficha de Consulta" {...props}>
		<TabbedForm>
			<FormTab label="Dados do Paciente">
				<TextInput source="veterinarian" label="Paciente" />
				<LongTextInput source="observations" label="Observações" />
				<LongTextInput source="informations" label="Informações" />
				<NumberInput source="patientTemperature" label="Temperatura do Paciente" />
				<NumberInput source="capillaryFill" label="Nem ideia" />
				<TextInput source="patientPulse" label="Pulso" />
				<TextInput source="mucosasApparent" label="Mucosas Aparentes" />
				<NumberInput source="patientRespiratoryRate" label="Frequência Respiratória" />
				<NumberInput source="patientHeartRate" label="Frequência Cardíaca" />
				<NumberInput source="patientWeight" label="Peso" />
			</FormTab>
			<FormTab label="Situação Clínica">
				<LongTextInput source="anamnesis" label="Anamnese" />
				<TextInput source="veterinarian" label="Veterinário" />
				<TextInput source="exam" label="Exame" />
				<TextInput source="clinicalProcedure" label="Procedimento Clínico" />
				<LongTextInput source="diagnostic" label="Diagnóstico" />
				<LongTextInput source="prognostic" label="Prognóstico" />
				<TextInput source="clinicalHistory" label="Histórico Clínico" />
				<LongTextInput source="diagnosis" label="Diagnose???" />
			</FormTab>
			<FormTab label="Medicação">
				<TextInput source="preliminaryMedication" label="Medicação Preliminar" />
				<NumberInput source="medicationDosage" label="Dosagem de Medicação" />
				<TextInput source="medicationFrequency" label="Frequência de Medicação" />
				<TextInput source="homeMedicationName" label="Nome da Medicação Domiciliar" />
				<TextInput source="homeMedicationDosage" label="Dosagem da Medicação Domiciliar" />
				<TextInput source="homeMedicationFrequency" label="Frequência da Medicação Domiciliar" />
				<TextInput source="clinicMedicationName" label="Nome da Medicação Clínica" />
				<TextInput source="clinicMedicationDosage" label="Dosagem da Medicação Clínica" />
				<TextInput source="clinicMedicationFrequency" label="Frequência da Medicação Clínica" />
			</FormTab>
		</TabbedForm>
	</Edit>
);

export const AppointmentRecordsCreate = (props) => (
	<Create title="Ficha de Consulta" {...props}>
		<SimpleForm>
				<TextInput source="veterinarian" label="Paciente" />
				<LongTextInput source="observations" label="Observações" />
				<LongTextInput source="informations" label="Informações" />
				<NumberInput source="patientTemperature" label="Temperatura do Paciente" />
				<NumberInput source="capillaryFill" label="Nem ideia" />
				<TextInput source="patientPulse" label="Pulso" />
				<TextInput source="mucosasApparent" label="Mucosas Aparentes" />
				<NumberInput source="patientRespiratoryRate" label="Frequência Respiratória" />
				<NumberInput source="patientHeartRate" label="Frequência Cardíaca" />
				<NumberInput source="patientWeight" label="Peso" />
				<LongTextInput source="anamnesis" label="Anamnese" />
				<TextInput source="veterinarian" label="Veterinário" />
				<TextInput source="exam" label="Exame" />
				<TextInput source="clinicalProcedure" label="Procedimento Clínico" />
				<LongTextInput source="diagnostic" label="Diagnóstico" />
				<LongTextInput source="prognostic" label="Prognóstico" />
				<TextInput source="clinicalHistory" label="Histórico Clínico" />
				<LongTextInput source="diagnosis" label="Diagnose???" />
				<TextInput source="preliminaryMedication" label="Medicação Preliminar" />
				<NumberInput source="medicationDosage" label="Dosagem de Medicação" />
				<TextInput source="medicationFrequency" label="Frequência de Medicação" />
				<TextInput source="homeMedicationName" label="Nome da Medicação Domiciliar" />
				<TextInput source="homeMedicationDosage" label="Dosagem da Medicação Domiciliar" />
				<TextInput source="homeMedicationFrequency" label="Frequência da Medicação Domiciliar" />
				<TextInput source="clinicMedicationName" label="Nome da Medicação Clínica" />
				<TextInput source="clinicMedicationDosage" label="Dosagem da Medicação Clínica" />
				<TextInput source="clinicMedicationFrequency" label="Frequência da Medicação Clínica" />
		</SimpleForm>
	</Create>
);
