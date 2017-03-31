import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const App = function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h1>App</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
