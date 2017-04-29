export const formatCPF = (cpf, prevCpf) => {
  let normalizedCpf = null;
  if (cpf) {
    normalizedCpf = cpf;
    const CPFNumbersOnly = cpf.replace(/[^\d]/g, '');
    if (!prevCpf || cpf.length > prevCpf.length) {
      if (CPFNumbersOnly.length === 3) {
        normalizedCpf = `${CPFNumbersOnly}.`;
      } else {
        // Nothing to do
      }
      if (CPFNumbersOnly.length === 6) {
        normalizedCpf = `${CPFNumbersOnly.slice(0, 3)}.${CPFNumbersOnly.slice(3, 6)}.`;
      } else {
        // Nothing to do
      }
      if (CPFNumbersOnly.length === 9) {
        normalizedCpf = `${CPFNumbersOnly.slice(0, 3)}.${CPFNumbersOnly.slice(3, 6)}.${CPFNumbersOnly.slice(6, 9)}-`;
      } else {
        // Nothing to do
      }
      if (CPFNumbersOnly.length === 11) {
        normalizedCpf = `${CPFNumbersOnly.slice(0, 3)}.${CPFNumbersOnly.slice(3, 6)}.${CPFNumbersOnly.slice(6, 9)}-${CPFNumbersOnly.slice(9, 11)}`;
      } else {
        // Nothing to do
      }
    } else {
      // Nothing to do
    }
    if (CPFNumbersOnly.length <= 3) {
      normalizedCpf = `${CPFNumbersOnly}`;
    } else if (CPFNumbersOnly.length <= 6) {
      normalizedCpf = `${CPFNumbersOnly.slice(0, 3)}.${CPFNumbersOnly.slice(3)}`;
    } else if (CPFNumbersOnly.length <= 9) {
      normalizedCpf = `${CPFNumbersOnly.slice(0, 3)}.${CPFNumbersOnly.slice(3, 6)}.${CPFNumbersOnly.slice(6)}`;
    } else if (CPFNumbersOnly.length <= 11 || CPFNumbersOnly.length > 11) {
      normalizedCpf = `${CPFNumbersOnly.slice(0, 3)}.${CPFNumbersOnly.slice(3, 6)}.${CPFNumbersOnly.slice(6, 9)}-${CPFNumbersOnly.slice(9, 11)}`;
    } else {
      // Nothing to do
    }
  } else {
    normalizedCpf = cpf;
  }
  return normalizedCpf;
};
