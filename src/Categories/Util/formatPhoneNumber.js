export const formatPhoneNumber = (phone, previousPhone) => {
  const PHONE_NUMBERS_ONLY = phone.replace(/[^\d]/g, '');
  let normalizedPhoneNumber = null;
  if (phone) {
    normalizedPhoneNumber = phone;
    if (!previousPhone || phone.length > previousPhone.length) {
      if (PHONE_NUMBERS_ONLY.length === 2) {
        normalizedPhoneNumber = `(${PHONE_NUMBERS_ONLY.slice(0, 2)}) `;
      } else {
        // Nothing to do
      }
      if (PHONE_NUMBERS_ONLY.length === 6) {
        normalizedPhoneNumber = `(${PHONE_NUMBERS_ONLY.slice(0, 2)}) ${PHONE_NUMBERS_ONLY.slice(2, 6)}-`;
      } else {
        // Nothing to do
      }
      if (PHONE_NUMBERS_ONLY.length === 10) {
        normalizedPhoneNumber = `(${PHONE_NUMBERS_ONLY.slice(0, 2)}) ${PHONE_NUMBERS_ONLY.slice(2, 6)}-${PHONE_NUMBERS_ONLY.slice(6, 10)}`;
      } else {
        // Nothing to do
      }
    }

    if (PHONE_NUMBERS_ONLY.length <= 2) {
      normalizedPhoneNumber = `${PHONE_NUMBERS_ONLY.slice(0)}`;
    } else if (PHONE_NUMBERS_ONLY.length <= 6) {
      normalizedPhoneNumber = `(${PHONE_NUMBERS_ONLY.slice(0, 2)}) ${PHONE_NUMBERS_ONLY.slice(2)}`;
    } else if (PHONE_NUMBERS_ONLY.length <= 10) {
      normalizedPhoneNumber = `(${PHONE_NUMBERS_ONLY.slice(0, 2)}) ${PHONE_NUMBERS_ONLY.slice(2, 6)}-${PHONE_NUMBERS_ONLY.slice(6)}`;
    } else if (PHONE_NUMBERS_ONLY.length <= 11 || PHONE_NUMBERS_ONLY.length > 11) {
      normalizedPhoneNumber = `(${PHONE_NUMBERS_ONLY.slice(0, 2)}) ${PHONE_NUMBERS_ONLY.slice(2, 7)}-${PHONE_NUMBERS_ONLY.slice(7, 11)}`;
    } else {
      // Nothing to do
    }
  } else {
    normalizedPhoneNumber = phone;
  }
  return normalizedPhoneNumber;
};
