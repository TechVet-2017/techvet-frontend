import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import ConsultPatients from './ConsultPatients';
import ConsultOwners from './ConsultOwners';
import RegisterPatient from './RegisterPatient';
import RegisterOwners from './RegisterOwner';
import FinancialReport from './FinancialReport';
import ImmunizationSchedule from './ImmunizationSchedule';
import ConsultHospitalization from './ConsultHospitalization';
import ConsultAttendance from './ConsultAttendance';
import BathAndGrooming from './BathAndGrooming';
import './App.css';

const App = function app() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container no-margin">
          <div className="row">
            <div className="col-md-4">
              <Sidebar />
            </div>
            <div className="col-md-8 application-page">
              <div>
                <Route exact path="/" component={Home} />
                <Route path="/patients/register" component={RegisterPatient} />
                <Route path="/patients/consult" component={ConsultPatients} />
                <Route path="/owners/consult" component={ConsultOwners} />
                <Route path="/owners/register" component={RegisterOwners} />
                <Route path="/financialReport" component={FinancialReport} />
                <Route path="/immunizationSchedule" component={ImmunizationSchedule} />
                <Route path="/consultHospitalization" component={ConsultHospitalization} />
                <Route path="/consultAttendance" component={ConsultAttendance} />
                <Route path="/bathAndGrooming" component={BathAndGrooming} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
