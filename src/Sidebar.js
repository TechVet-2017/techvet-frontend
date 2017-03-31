import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = function Sidebar() {
  return (
    <div className="techvet-sidemenu">
      <div className="sidemenu-user">
        <div className="sidemenu-user-picture" />
        <h2>Nome do Usuário</h2>
      </div>
      <ul>
        <li>
          <i className="fa fa-user-circle-o" />
          Proprietário
          <ul>
            <li>
              <a href="/">
                <i className="fa fa-chevron-right" />
                Consultar
              </a>
            </li>
            <li>
              <Link to="/owner/register">
                <i className="fa fa-chevron-right" />
                Cadastrar
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <i className="fa fa-paw" />
          Paciente
          <ul>
            <li>
              <a href="/">
                <i className="fa fa-chevron-right" />
                Consultar
              </a>
            </li>
            <li>
              <Link to="/patient/register">
                <i className="fa fa-chevron-right" />
                Cadastrar
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">
            <i className="fa fa-medkit" />
            Consultar Atendimento
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fa fa-stethoscope" />
            Consultar Internação
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fa fa-calendar-plus-o" />
            Calendário de Vacinas
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fa fa-bath" />
            Banho & Tosa
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fa fa-credit-card" />
            Relatório Financeiro
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
