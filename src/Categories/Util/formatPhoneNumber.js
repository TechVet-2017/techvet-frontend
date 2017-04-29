export const formatPhoneNumber = (phone, previousPhone) => {
  let normalizedPhoneNumber = null;
  if (phone) {
    normalizedPhoneNumber = phone;
    const phoneNumbersOnly = phone.replace(/[^\d]/g, '');
    if (!previousPhone || phone.length > previousPhone.length) {
      if (phoneNumbersOnly.length === 2) {
        normalizedPhoneNumber = `(${phoneNumbersOnly.slice(0, 2)}) `;
      } else {
        // Nothing to do
      }
      if (phoneNumbersOnly.length === 6) {
        normalizedPhoneNumber = `(${phoneNumbersOnly.slice(0, 2)}) ${phoneNumbersOnly.slice(2, 6)}-`;
      } else {
        // Nothing to do
      }
      if (phoneNumbersOnly.length === 10) {
        normalizedPhoneNumber = `(${phoneNumbersOnly.slice(0, 2)}) ${phoneNumbersOnly.slice(2, 6)}-${phoneNumbersOnly.slice(6, 10)}`;
      } else {
        // Nothing to do
      }
    }

    if (phoneNumbersOnly.length <= 2) {
      normalizedPhoneNumber = `${phoneNumbersOnly.slice(0)}`;
    } else if (phoneNumbersOnly.length <= 6) {
      normalizedPhoneNumber = `(${phoneNumbersOnly.slice(0, 2)}) ${phoneNumbersOnly.slice(2)}`;
    } else if (phoneNumbersOnly.length <= 10) {
      normalizedPhoneNumber = `(${phoneNumbersOnly.slice(0, 2)}) ${phoneNumbersOnly.slice(2, 6)}-${phoneNumbersOnly.slice(6)}`;
    } else if (phoneNumbersOnly.length <= 11 || phoneNumbersOnly.length > 11) {
      normalizedPhoneNumber = `(${phoneNumbersOnly.slice(0, 2)}) ${phoneNumbersOnly.slice(2, 7)}-${phoneNumbersOnly.slice(7, 11)}`;
    } else {
      // Nothing to do
    }
  } else {
    normalizedPhoneNumber = phone;
  }
  return normalizedPhoneNumber;
};
