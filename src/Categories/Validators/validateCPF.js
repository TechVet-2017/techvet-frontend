function verifyCPFIsEmpyt(CPF_NUMBERS_ONLY) {
  let message = null;
  if (CPF_NUMBERS_ONLY === '') {
    message = 'CPF inválido';
  } else {
    message = null;
  }
  return message;
}

function calculateDigity(CPF_NUMBERS_ONLY, calculationWeigth) {
  let add = 0;
  for (let i = 0; i < (calculationWeigth - 1); i += 1) {
    add += parseInt((CPF_NUMBERS_ONLY.charAt(i)), calculationWeigth) * (calculationWeigth - i);
  }
  let remainder = 11 - (add % 11);
  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  } else {
    // Nothing to do
  }
  return remainder;
}
function cpfCalculation(CPF_NUMBERS_ONLY) {
  let remainder = 0;
  let message = null;
  let calculationWeigth = 10;

  remainder = calculateDigity(CPF_NUMBERS_ONLY, calculationWeigth);
  if (remainder !== parseInt(CPF_NUMBERS_ONLY.charAt(calculationWeigth - 1), calculationWeigth)) {
    message = 'CPF inválido';
  } else {
    calculationWeigth += 1;
    remainder = calculateDigity(CPF_NUMBERS_ONLY, calculationWeigth);
    if (remainder !== parseInt(CPF_NUMBERS_ONLY.charAt(calculationWeigth - 1),
    (calculationWeigth - 1))) {
      message = 'CPF inválido';
    } else {
      message = undefined;
    }
  }
  return message;
}

function verifyCPFIsASequenceOfNumbers(CPF_NUMBERS_ONLY) {
  let message = null;
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
    message = cpfCalculation(CPF_NUMBERS_ONLY);
  }
  return message;
}

export const validateCPF = (cpf) => {
  const CPF_NUMBERS_ONLY = cpf.replace(/[^\d]+/g, '');
  let message = null;
  if (cpf) {
    message = verifyCPFIsEmpyt(CPF_NUMBERS_ONLY);
    message = verifyCPFIsASequenceOfNumbers(CPF_NUMBERS_ONLY);
  } else {
    message = cpf;
  }
  return message;
};
