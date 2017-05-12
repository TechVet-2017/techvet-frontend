export const formatZipCode = (zipCode, previousZipCode) => {
  let normalizedZipCode = null;
  if (zipCode) {
    normalizedZipCode = zipCode;
    const zipCodeNumbersOnly = zipCode.replace(/[^\d]/g, '');
    if (!previousZipCode || zipCode.length > previousZipCode.length) {
      if (zipCodeNumbersOnly.length === 5) {
        normalizedZipCode = `${zipCodeNumbersOnly.slice(0, 5)}-`;
      } else {
        // Nothing to do
      }
      if (zipCodeNumbersOnly.length === 8) {
        normalizedZipCode = `${zipCodeNumbersOnly.slice(0, 5)}-${zipCodeNumbersOnly.slice(5, 8)}`;
      } else {
        // Nothing to do
      }
    }

    if (zipCodeNumbersOnly.length <= 5) {
      normalizedZipCode = `${zipCodeNumbersOnly.slice(0)}`;
    } else if (zipCodeNumbersOnly.length <= 8 || zipCodeNumbersOnly.length > 8) {
      normalizedZipCode = `${zipCodeNumbersOnly.slice(0, 5)}-${zipCodeNumbersOnly.slice(5, 8)}`;
    } else {
      // Nothing to do
    }
  } else {
    normalizedZipCode = zipCode;
  }
  return normalizedZipCode;
};
