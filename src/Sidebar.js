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
          <i className="fa fa-user-circle-o" />
          <a href="/">Proprietário</a>
          <ul>
            <li>
              <i className="fa fa-chevron-right" />
              <a href="/">Consultar</a>
            </li>
            <li>
              <i className="fa fa-chevron-right" />
              <a href="/">Cadastrar</a>
            </li>
          </ul>
        </li>
        <li>
          <i className="fa fa-paw" />
          <a href="/">Paciente</a>
          <ul>
            <li>
              <i className="fa fa-chevron-right" />
              <a href="/">Consultar</a>
            </li>
            <li>
              <i className="fa fa-chevron-right" />
              <a href="/">Cadastrar</a>
            </li>
          </ul>
        </li>
        <li>
          <i className="fa fa-medkit" />
          <a href="/">Consultar Atendimento</a>
        </li>
        <li>
          <i className="fa fa-stethoscope" />
          <a href="/">Consultar Internação</a>
        </li>
        <li>
          <i className="fa fa-calendar-plus-o" />
          <a href="/">Calendário de Vacinas</a>
        </li>
        <li>
          <i className="fa fa-bath" />
          <a href="/">Banho & Tosa</a>
        </li>
        <li>
          <i className="fa fa-credit-card" />
          <a href="/">Relatório Financeiro</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
