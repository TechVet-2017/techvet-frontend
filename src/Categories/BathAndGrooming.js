import React from 'react';
import { List, Responsive, SimpleList, Edit, Create, Datagrid, TextField, EditButton, DeleteButton, DisabledInput, LongTextInput, SimpleForm } from 'admin-on-rest/lib/mui';

const validationIsEmpty = (values) => {
    const errors = {};
    
    if (!values.serviceBathGrooming){
        errors.serviceBathGrooming = ['Campo obrigatório'];
    }

    else if (values.serviceBathGrooming.length < 10){
        errors.serviceBathGrooming = ['Campo muito pequeno'];
    }
    return errors
};

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

export const BathAndGroomingEdit = props => (
  <Edit title={'Editar Serviço'} {...props}>
    <SimpleForm validation={validationIsEmpty}>
      <DisabledInput source="id" />
      <LongTextInput source="serviceBathGrooming" label="Serviço" />
    </SimpleForm>
  </Edit>
);

export const BathAndGroomingCreate = props => (
  <Create {...props} title={'Adicionar Serviço'}>
    <SimpleForm validation={validationIsEmpty}>
      <LongTextInput source="serviceBathGrooming" label="Serviço" />
    </SimpleForm>
  </Create>
);
