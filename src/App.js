import React from 'react';
import UserIcon from 'material-ui/svg-icons/social/person';
import OwnerIcon from 'material-ui/svg-icons/social/person-outline';
import PatientIcon from 'material-ui/svg-icons/action/pets';
import AttendenceIcon from 'material-ui/svg-icons/image/healing';
import BathAndGroomingIcon from 'material-ui/svg-icons/places/hot-tub';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';
import { Delete } from 'admin-on-rest/lib/mui';
import { UserList, UserEdit, UserCreate } from './Categories/Users';
import { OwnerList, OwnerShow, OwnerCreate, OwnerEdit } from './Categories/Owners';
import { PatientList, PatientEdit, PatientCreate, PatientShow, PatientFilter } from './Categories/Patients';
import { BathAndGroomingList, BathAndGroomingEdit, BathAndGroomingCreate, BathAndGroomingShow } from './Categories/BathAndGrooming';
import { AppointmentRecordsList, AppointmentRecordsEdit, AppointmentRecordsCreate } from './Categories/ClinicalRecordsAppointment';
import { VaccinationRecordsList, VaccinationRecordsEdit, VaccinationRecordsCreate } from './Categories/ClinicalRecordsVaccination';
import Dashboard from './Dashboard';
import authClient from './authClient';
import CustomTheme from './CustomTheme';

const App = () => (
  <Admin
    restClient={jsonServerRestClient('http://localhost:8080/techvet/rest')}
    theme={getMuiTheme(CustomTheme)}
    title={'TechVet'}
    authClient={authClient}
    dashboard={Dashboard}
  >
    <Resource
      name="owners"
      options={{ label: 'Proprietários' }}
      list={OwnerList}
      show={OwnerShow}
      edit={OwnerEdit}
      create={OwnerCreate}
      remove={Delete}
      icon={OwnerIcon}
    />
    <Resource
      name="patients"
      options={{ label: 'Pacientes' }}
      filter={PatientFilter}
      show={PatientShow}
      list={PatientList}
      edit={PatientEdit}
      create={PatientCreate}
      remove={Delete}
      icon={PatientIcon}
    />
    <Resource
      name="appointmentRecords"
      options={{ label: 'Consultas' }}
      list={AppointmentRecordsList}
      edit={AppointmentRecordsEdit}
      create={AppointmentRecordsCreate}
      remove={Delete}
      icon={AttendenceIcon}
    />
    <Resource
      name="vaccinationRecords"
      options={{ label: 'Vacinação' }}
      list={VaccinationRecordsList}
      edit={VaccinationRecordsEdit}
      create={VaccinationRecordsCreate}
      remove={Delete}
    />
    <Resource
      name="bathAndGrooming"
      options={{ label: 'Banho & Tosa' }}
      list={BathAndGroomingList}
      show={BathAndGroomingShow}
      edit={BathAndGroomingEdit}
      create={BathAndGroomingCreate}
      remove={Delete}
      icon={BathAndGroomingIcon}
    />
    <Resource
      name="users"
      options={{ label: 'Usuários' }}
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
      remove={Delete}
      icon={UserIcon}
    />
  </Admin>
);

export default App;
