import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import RegisterPatient from './RegisterPatient';
import './App.css';

const App = function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container no-margin">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9 application-page">
              <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/patient/register" component={RegisterPatient} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
