export const formatCPF = (cpf, prevCpf) => {
    if (!cpf) {
        return cpf;
    }
    
    const CPFNumbersOnly = cpf.replace(/[^\d]/g, '');
    if (!prevCpf || cpf.length > prevCpf.length) {
        if (CPFNumbersOnly.length === 3)
            return `${CPFNumbersOnly}.`;
        if (CPFNumbersOnly.length === 6)
            return `${CPFNumbersOnly.slice(0,3)}.${CPFNumbersOnly.slice(3,6)}.`;
        if (CPFNumbersOnly.length === 9)
            return `${CPFNumbersOnly.slice(0,3)}.${CPFNumbersOnly.slice(3,6)}.${CPFNumbersOnly.slice(6,9)}-`;
    }
     if (CPFNumbersOnly.length <= 3)
            return `${CPFNumbersOnly}`;
        if (CPFNumbersOnly.length <= 6)
            return `${CPFNumbersOnly.slice(0,3)}.${CPFNumbersOnly.slice(3)}`;
        if (CPFNumbersOnly.length <= 9)
            return `${CPFNumbersOnly.slice(0,3)}.${CPFNumbersOnly.slice(3,6)}.${CPFNumbersOnly.slice(6)}`;
            
    return `${CPFNumbersOnly.slice(0,3)}.${CPFNumbersOnly.slice(3,6)}.${CPFNumbersOnly.slice(6,9)}-${CPFNumbersOnly.slice(9,11)}`;
}