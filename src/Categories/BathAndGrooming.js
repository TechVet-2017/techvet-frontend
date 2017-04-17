import React from 'react';
import { List, Responsive, SimpleList, Edit, Create, Datagrid, TextField, EditButton, DeleteButton, DisabledInput, LongTextInput, SimpleForm } from 'admin-on-rest/lib/mui';


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
          <TextField source="serviceBathGrooming" label="Serviço" />
          <EditButton />
          <DeleteButton />
        </Datagrid>
      }
    />
  </List>
);


const BathAndGroomingTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const BathAndGroomingEdit = props => (
  <Edit title={<BathAndGroomingTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <LongTextInput source="serviceBathGrooming" />
    </SimpleForm>
  </Edit>
);

export const BathAndGroomingCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <LongTextInput source="serviceBathGrooming" label="Serviço" />
    </SimpleForm>
  </Create>
);
