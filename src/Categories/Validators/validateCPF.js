export const validateCPF = (cpf) => {
  let message = null;
  if (cpf) {
    const CPFNumbersOnly = cpf.replace(/[^\d]+/g, '');
    if (CPFNumbersOnly === '') {
      message = 'CPF inválido';
    } else {
      // Nothing to do
    }
    if (CPFNumbersOnly.length !== 11 ||
      CPFNumbersOnly === '00000000000' ||
      CPFNumbersOnly === '11111111111' ||
      CPFNumbersOnly === '22222222222' ||
      CPFNumbersOnly === '33333333333' ||
      CPFNumbersOnly === '44444444444' ||
      CPFNumbersOnly === '55555555555' ||
      CPFNumbersOnly === '66666666666' ||
      CPFNumbersOnly === '77777777777' ||
      CPFNumbersOnly === '88888888888' ||
      CPFNumbersOnly === '99999999999') {
      message = 'CPF inválido';
    } else {
      let add = 0;
      for (let i = 0; i < 9; i += 1) {
        add += parseInt((CPFNumbersOnly.charAt(i)), 10) * (10 - i);
      }
      let remainder = 11 - (add % 11);
      if (remainder === 10 || remainder === 11) {
        remainder = 0;
      } else {
        // Nothing to do
      }
      if (remainder !== parseInt(CPFNumbersOnly.charAt(9), 10)) {
        message = 'CPF inválido';
      } else {
        add = 0;
        for (let i = 0; i < 10; i += 1) {
          add += parseInt(CPFNumbersOnly.charAt(i), 10) * (11 - i);
        }
        remainder = 11 - (add % 11);
        if (remainder === 10 || remainder === 11) {
          remainder = 0;
        } else {
          // Nothing to do
        }
        if (remainder !== parseInt(CPFNumbersOnly.charAt(10), 10)) {
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
