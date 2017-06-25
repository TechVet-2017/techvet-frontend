// This functiontion verify if the CPF is empty
function verifyCPFIsEmpty(CPF_NUMBERS_ONLY) {
  let message = null;
  if (CPF_NUMBERS_ONLY === '') {
    message = 'CPF inválido';
  } else {
    message = null;
  }
  return message;
}
// This functiontion calculate the verification digit in the CPF
function calculateVerificationDigit(CPF_NUMBERS_ONLY, calculationWeigth) {
  let add = 0;
  // Sum of the calculation of each position of the CPF
  for (let i = 0; i < (calculationWeigth - 1); i += 1) {
    add += parseInt((CPF_NUMBERS_ONLY.charAt(i)), calculationWeigth) * (calculationWeigth - i);
  }
  let remainder = 11 - (add % 11);
  // The remainder can be only from 0 to 9, so if the remainder is 10 or 11, it is changed to 0
  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  } else {
    // Nothing to do
  }
  return remainder;
}

// This function call other functions to execute the CPF calculation
function cpfCalculation(CPF_NUMBERS_ONLY) {
  let remainder = 0; // Verification digit
  let message = null;
  let calculationWeigth = 10; // Weight defined for the calculation of the first digit of the CPF

  remainder = calculateVerificationDigit(CPF_NUMBERS_ONLY, calculationWeigth);
  // Verify if the digity found by the calculation is the same founr in the 10 position
  if (remainder !== parseInt(CPF_NUMBERS_ONLY.charAt(calculationWeigth - 1), calculationWeigth)) {
    message = 'CPF inválido';
  } else {
    calculationWeigth += 1; // Weight defined for the calculation of the first digit of the CPF
    remainder = calculateVerificationDigit(CPF_NUMBERS_ONLY, calculationWeigth);
     // Verify if the digity found by the calculation is the same founr in the 11 position
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
  let message = null; // CPF validation message
  if (cpf) {
    message = verifyCPFIsEmpty(CPF_NUMBERS_ONLY);
    message = verifyCPFIsASequenceOfNumbers(CPF_NUMBERS_ONLY);
  } else {
    message = cpf;
  }
  return message;
};
