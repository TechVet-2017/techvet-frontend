import React from 'react';
import './Header.css';


const Header = function header() {
  return (
    <div className="navbar navbar-default techvet-navbar">
      <div className="container">
        <h1>TECH Vet</h1>
        <ul className="nav navbar-nav pull-right">
          <li>
            <button className="btn btn-default techvet-button" type="button">
              <i className="glyphicon glyphicon-cog" />
            </button>
          </li>
          <li><button className="btn btn-default techvet-button" type="button">Sair</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
