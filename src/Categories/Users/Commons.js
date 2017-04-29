import React from 'react';



export const TextInputValidation = (value) => {
  if (!value) {
    return 'Campo obrigatório';
  }

  return null;
};

export const NameValidation = (value) => {
 if (value.length < 2){
  return 'Campo muito pequeno';
  }
 /*if(value = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/){
    	return 'xanaina';
  }*/
  return null;
};

export const UserName = ({ user }) => {
  return <span>Usuário {user ? `"${user.userName}"` : ''}</span>;
};
