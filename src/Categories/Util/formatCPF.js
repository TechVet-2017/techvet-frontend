export const formatCPF = (cpf, prevCpf) => {
  const CPF_NUMBERS_ONLY = cpf.replace(/[^\d]/g, '');
  let normalizedCpf = null;
  if (cpf) {
    normalizedCpf = cpf;
    if (!prevCpf || cpf.length > prevCpf.length) {
      if (CPF_NUMBERS_ONLY.length === 3) {
        normalizedCpf = `${CPF_NUMBERS_ONLY}.`;
      } else {
        // Nothing to do
      }
      if (CPF_NUMBERS_ONLY.length === 6) {
        normalizedCpf = `${CPF_NUMBERS_ONLY.slice(0, 3)}.${CPF_NUMBERS_ONLY.slice(3, 6)}.`;
      } else {
        // Nothing to do
      }
      if (CPF_NUMBERS_ONLY.length === 9) {
        normalizedCpf = `${CPF_NUMBERS_ONLY.slice(0, 3)}.${CPF_NUMBERS_ONLY.slice(3, 6)}.${CPF_NUMBERS_ONLY.slice(6, 9)}-`;
      } else {
        // Nothing to do
      }
      if (CPF_NUMBERS_ONLY.length === 11) {
        normalizedCpf = `${CPF_NUMBERS_ONLY.slice(0, 3)}.${CPF_NUMBERS_ONLY.slice(3, 6)}.${CPF_NUMBERS_ONLY.slice(6, 9)}-${CPF_NUMBERS_ONLY.slice(9, 11)}`;
      } else {
        // Nothing to do
      }
    } else {
      // Nothing to do
    }
    if (CPF_NUMBERS_ONLY.length <= 3) {
      normalizedCpf = `${CPF_NUMBERS_ONLY}`;
    } else if (CPF_NUMBERS_ONLY.length <= 6) {
      normalizedCpf = `${CPF_NUMBERS_ONLY.slice(0, 3)}.${CPF_NUMBERS_ONLY.slice(3)}`;
    } else if (CPF_NUMBERS_ONLY.length <= 9) {
      normalizedCpf = `${CPF_NUMBERS_ONLY.slice(0, 3)}.${CPF_NUMBERS_ONLY.slice(3, 6)}.${CPF_NUMBERS_ONLY.slice(6)}`;
    } else if (CPF_NUMBERS_ONLY.length <= 11 || CPF_NUMBERS_ONLY.length > 11) {
      normalizedCpf = `${CPF_NUMBERS_ONLY.slice(0, 3)}.${CPF_NUMBERS_ONLY.slice(3, 6)}.${CPF_NUMBERS_ONLY.slice(6, 9)}-${CPF_NUMBERS_ONLY.slice(9, 11)}`;
    } else {
      // Nothing to do
    }
  } else {
    normalizedCpf = cpf;
  }
  return normalizedCpf;
};
