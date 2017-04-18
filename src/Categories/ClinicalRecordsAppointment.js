import React from 'react';
import { 
	Datagrid, 
	TextField,
	EditButton,
	DeleteButton,
	List,
} from 'admin-on-rest/lib/mui';

export const AppointmentRecordsList = (props) => (

 	<List {...props} title={'Consultas'}>
		<Datagrid>
		    <TextField source="anamnesis" label="Anamnese" />
	        <TextField source="veterinarian" label="Veterinário" />
	        <TextField source="veterinarian" label="Veterinário" />
			// <TextField source="clinicalProcedure" label="Procedimento Clínico" />
			// <TextField source="observations" label="Observações" />
			<TextField source="exam" label="Exame" />
			// <TextField source="informations" label="Informações" />
			// <TextField source="preliminaryMedication" label="Medicação Preliminar" />
			// <TextField source="medicationDosage" label="Dosagem de Medicação" />
			// <TextField source="medicationFrequency" label="Frequência de Medicação" />
			// <TextField source="diagnostic" label="Diagnóstico" />
			// <TextField source="prognostic" label="Prognóstico" />
			// <TextField source="homeMedicationName" label="Nome da Medicação Domiciliar" />
			// <TextField source="homeMedicationDosage" label="Dosagem da Medicação Domiciliar" />
			// <TextField source="homeMedicationFrequency" label="Frequência da Medicação Domiciliar" />
			// <TextField source="clinicMedicationName" label="Nome da Medicação Clínica" />
			// <TextField source="clinicMedicationDosage" label="Dosagem da Medicação Clínica" />
			// <TextField source="clinicMedicationFrequency" label="Frequência da Medicação Clínica" />

			// <TextField source="clinicalHistory" label="aqui" />
   			// <TextField source="diagnosis" label="aqui" />
			// <TextField source="patientTemperature" label="aqui" />
			// <TextField source="capillaryFill" label="aqui" />
			// <TextField source="patientPulse" label="aqui" />
			// <TextField source="mucosasApparent" label="aqui" />
			// <TextField source="patientRespiratoryRate" label="aqui" />
			// <TextField source="patientHeartRate" label="aqui" />
			// <TextField source="patientWeight" label="aqui" />

	        <EditButton />
	        <DeleteButton />
	    </Datagrid>
	</List>
);
