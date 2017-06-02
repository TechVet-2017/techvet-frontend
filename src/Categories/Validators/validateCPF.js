export const validateCPF = (cpf) => {
  const CPF_NUMBERS_ONLY = cpf.replace(/[^\d]+/g, '');
  let message = null;
  if (cpf) {
    if (CPF_NUMBERS_ONLY === '') {
      message = 'CPF inválido';
    } else {
      // Nothing to do
    }
    if (CPF_NUMBERS_ONLY.length !== 11 ||
      CPF_NUMBERS_ONLY === '00000000000' ||
      CPF_NUMBERS_ONLY === '11111111111' ||
      CPF_NUMBERS_ONLY === '22222222222' ||
      CPF_NUMBERS_ONLY === '33333333333' ||
      CPF_NUMBERS_ONLY === '44444444444' ||
      CPF_NUMBERS_ONLY === '55555555555' ||
      CPF_NUMBERS_ONLY === '66666666666' ||
      CPF_NUMBERS_ONLY === '77777777777' ||
      CPF_NUMBERS_ONLY === '88888888888' ||
      CPF_NUMBERS_ONLY === '99999999999') {
      message = 'CPF inválido';
    } else {
      let add = 0;
      for (let i = 0; i < 9; i += 1) {
        add += parseInt((CPF_NUMBERS_ONLY.charAt(i)), 10) * (10 - i);
      }
      let remainder = 11 - (add % 11);
      if (remainder === 10 || remainder === 11) {
        remainder = 0;
      } else {
        // Nothing to do
      }
      if (remainder !== parseInt(CPF_NUMBERS_ONLY.charAt(9), 10)) {
        message = 'CPF inválido';
      } else {
        add = 0;
        for (let i = 0; i < 10; i += 1) {
          add += parseInt(CPF_NUMBERS_ONLY.charAt(i), 10) * (11 - i);
        }
        remainder = 11 - (add % 11);
        if (remainder === 10 || remainder === 11) {
          remainder = 0;
        } else {
          // Nothing to do
        }
        if (remainder !== parseInt(CPF_NUMBERS_ONLY.charAt(10), 10)) {
          message = 'CPF inválido';
        } else {
          message = undefined;
        }
      }
    }
  } else {
    message = cpf;
  }
  return message;
};
