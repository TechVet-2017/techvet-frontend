import React from 'react';

export const TextInputValidation = (value) => {
  if (!value) {
    return 'Campo obrigatório';
  }
  else {
    //Do nothing
  }
  return null;
};

export const NameValidation = (value) => {
  if (value.length < 2) {
    return 'Campo muito pequeno';
  }
  else {
    //Do nothing
  }
  return null;
};

export const UserName = ({ user }) => {
  return <span>Usuário {user ? `"${user.userName}"` : ''}</span>;
};
