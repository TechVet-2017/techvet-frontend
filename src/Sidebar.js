import React from 'react';
import './Sidebar.css';

const Sidebar = function Sidebar() {
  return (
    <div id="sidebar" className="techvet-sidemenu">
      <div className="sidemenu-user">
        <div className="sidemenu-user-picture" />
        <h2>Nome do Usuário</h2>
      </div>
      <ul>
        <li>
          <a href="/">Proprietário</a>
          <ul>
            <li><a href="/">Consultar</a></li>
            <li><a href="/">Cadastrar</a></li>
          </ul>
        </li>
        <li>
          <a href="/">Paciente</a>
          <ul>
            <li><a href="/">Consultar</a></li>
            <li><a href="/">Cadastrar</a></li>
          </ul>
        </li>
        <li><a href="/">Consultar Atendimento</a></li>
        <li><a href="/">Consultar Internação</a></li>
        <li><a href="/">Calendário de Vacinas</a></li>
        <li><a href="/">Banho & Tosa</a></li>
        <li><a href="/">Relatório Financeiro</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
