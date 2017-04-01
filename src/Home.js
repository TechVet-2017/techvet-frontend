import React from 'react';
import TechVetLogo from './images/techvet-logo.png';
import './Home.css';

const Home = function home() {
  return (
    <div className="home-page">
      <h3>Seja bem vindo Nome do Usuário</h3>
      <img className="techvet-logo" src={TechVetLogo} alt="logo" />
    </div>
  );
};

export default Home;
