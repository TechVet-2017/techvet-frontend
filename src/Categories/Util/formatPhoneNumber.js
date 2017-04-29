export const formatPhoneNumber = (phone, previousPhone) => {
    const phoneNumbersOnly = phone.replace(/[^\d]/g, '');
    
    if (!previousPhone || phone.length > previousPhone.length) {
        if (phoneNumbersOnly.length === 2) {
            return `(${phoneNumbersOnly.slice(0,2)}) `;
        }
        if (phoneNumbersOnly.length === 6) {
            return `(${phoneNumbersOnly.slice(0,2)}) ${phoneNumbersOnly.slice(2, 6)}-`;
        }
        if (phoneNumbersOnly.length === 10) {
            return `(${phoneNumbersOnly.slice(0,2)}) ${phoneNumbersOnly.slice(2, 6)}-${phoneNumbersOnly.slice(6, 10)}`;
        }        
    }  
    
    if (phoneNumbersOnly.length <= 2) {
        return `${phoneNumbersOnly.slice(0)}`;
    }
    if (phoneNumbersOnly.length <= 6) {
        return `(${phoneNumbersOnly.slice(0,2)}) ${phoneNumbersOnly.slice(2)}`;
    }
    if (phoneNumbersOnly.length <= 10) {
        return `(${phoneNumbersOnly.slice(0,2)}) ${phoneNumbersOnly.slice(2, 6)}-${phoneNumbersOnly.slice(6)}`;
    }
    
    return `(${phoneNumbersOnly.slice(0,2)}) ${phoneNumbersOnly.slice(2, 7)}-${phoneNumbersOnly.slice(7, 11)}`;
    
}