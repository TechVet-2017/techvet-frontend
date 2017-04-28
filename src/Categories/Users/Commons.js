import React from 'react';

export const TextInputValidation = (value) => {
  if (!value) {
    return 'Campo obrigatório';
  }
  return null;
};

export const UserName = ({ user }) => {
  return <span>Usuário {user ? `"${user.userName}"` : ''}</span>;
};
