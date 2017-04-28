import React from 'react';
import PostIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/person';
import OwnerIcon from 'material-ui/svg-icons/social/person-outline';
import PatientIcon from 'material-ui/svg-icons/action/pets';
import AttendenceIcon from 'material-ui/svg-icons/image/healing';
import HospitalizationIcon from 'material-ui/svg-icons/maps/local-hospital';
import VaccinationScheduleIcon from 'material-ui/svg-icons/notification/event-note';
import BathAndGroomingIcon from 'material-ui/svg-icons/places/hot-tub';
import FinancialReportIcon from 'material-ui/svg-icons/editor/attach-money';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';
import { Delete } from 'admin-on-rest/lib/mui';
import { PostList, PostEdit, PostCreate } from './Categories/Example';
import { UserList, UserEdit, UserCreate } from './Categories/Users';
import { OwnerList, OwnerShow, OwnerCreate, OwnerEdit } from './Categories/Owners';
import { PatientList } from './Categories/Patients';
import { AttendenceList } from './Categories/Attendences';
import { HospitalizationList } from './Categories/Hospitalizations';
import { VaccinationScheduleList } from './Categories/VaccinationSchedule';
import { BathAndGroomingList } from './Categories/BathAndGrooming';
import { FinancialReportList } from './Categories/FinancialReports';
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
      name="post" options={{ label: 'Exemplo' }} list={PostList} edit={PostEdit}
      create={PostCreate} remove={Delete} icon={PostIcon}
    />
    <Resource name="user" options={{ label: 'Usuários' }} list={UserList} edit={UserEdit} create={UserCreate} remove={Delete} icon={UserIcon} />
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
    <Resource name="patient" options={{ label: 'Pacientes' }} list={PatientList} icon={PatientIcon} />
    <Resource name="attendence" options={{ label: 'Consultas' }} list={AttendenceList} icon={AttendenceIcon} />
    <Resource name="hospitalization" options={{ label: 'Internações' }} list={HospitalizationList} icon={HospitalizationIcon} />
    <Resource
      name="vaccinationSchedule" options={{ label: 'Calendário de Vacinação' }}
      list={VaccinationScheduleList}
      icon={VaccinationScheduleIcon}
    />
    <Resource name="bathAndGrooming" options={{ label: 'Banho & Tosa' }} list={BathAndGroomingList} icon={BathAndGroomingIcon} />
    <Resource name="financialReport" options={{ label: 'Relatório Financeiro' }} list={FinancialReportList} icon={FinancialReportIcon} />
  </Admin>
);

export default App;
