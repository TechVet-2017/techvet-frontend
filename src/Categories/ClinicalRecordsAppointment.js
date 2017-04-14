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
	        <EditButton />
	        <DeleteButton />
	    </Datagrid>
	</List>
);
