import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = function sidebar() {
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
              <Link to="/owners/consult">
                <i className="fa fa-chevron-right" />
                Consultar
              </Link>
            </li>
            <li>
              <Link to="/owners/register">
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
              <Link to="/patients/consult">
                <i className="fa fa-chevron-right" />
                Consultar
              </Link>
            </li>
            <li>
              <Link to="/patients/register">
                <i className="fa fa-chevron-right" />
                Cadastrar
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/consultAttendance">
            <i className="fa fa-medkit" />
            Consultar Atendimento
          </Link>
        </li>
        <li>
          <Link to="/consultHospitalization">
            <i className="fa fa-stethoscope" />
            Consultar Internação
          </Link>
        </li>
        <li>
          <Link to="/immunizationSchedule">
            <i className="fa fa-calendar-plus-o" />
            Calendário de Vacinas
          </Link>
        </li>
        <li>
          <Link to="/bathAndGrooming">
            <i className="fa fa-bath" />
            Banho & Tosa
          </Link>
        </li>
        <li>
          <Link to="/financialReport">
            <i className="fa fa-credit-card" />
            Relatório Financeiro
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
