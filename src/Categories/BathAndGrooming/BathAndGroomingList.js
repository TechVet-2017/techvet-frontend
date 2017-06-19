import React from 'react';
import {
  List,
  Responsive,
  SimpleList,
  Datagrid,
  EditButton,
  DeleteButton,
  TextField,
  ShowButton,
  ReferenceField,
} from 'admin-on-rest/lib/mui';

export const BathAndGroomingList = props => (
  <List {...props} title={'Banho & Tosa'}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.title}
          secondaryText={record => `${record.views} views`}
          tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
        />
      }
      medium={
        <Datagrid>
          <TextField source="id" label="ID" />
          <ReferenceField label="Animal" source="patientId" reference="patients" allowEmpty>
            <TextField source="patientName" />
          </ReferenceField>
          <TextField source="serviceBathGrooming" label="Serviço" />
          <ShowButton />
          <EditButton />
          <DeleteButton />
        </Datagrid>
      }
    />
  </List>
);
