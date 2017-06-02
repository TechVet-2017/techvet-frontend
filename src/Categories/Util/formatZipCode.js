export const formatZipCode = (zipCode, previousZipCode) => {
  const ZIP_CODE_NUMBER_ONLY = zipCode.replace(/[^\d]/g, '');
  let normalizedZipCode = null;
  if (zipCode) {
    normalizedZipCode = zipCode;
    if (!previousZipCode || zipCode.length > previousZipCode.length) {
      if (ZIP_CODE_NUMBER_ONLY.length === 5) {
        normalizedZipCode = `${ZIP_CODE_NUMBER_ONLY.slice(0, 5)}-`;
      } else {
        // Nothing to do
      }
      if (ZIP_CODE_NUMBER_ONLY.length === 8) {
        normalizedZipCode = `${ZIP_CODE_NUMBER_ONLY.slice(0, 5)}-${ZIP_CODE_NUMBER_ONLY.slice(5, 8)}`;
      } else {
        // Nothing to do
      }
    }

    if (ZIP_CODE_NUMBER_ONLY.length <= 5) {
      normalizedZipCode = `${ZIP_CODE_NUMBER_ONLY.slice(0)}`;
    } else if (ZIP_CODE_NUMBER_ONLY.length <= 8 || ZIP_CODE_NUMBER_ONLY.length > 8) {
      normalizedZipCode = `${ZIP_CODE_NUMBER_ONLY.slice(0, 5)}-${ZIP_CODE_NUMBER_ONLY.slice(5, 8)}`;
    } else {
      // Nothing to do
    }
  } else {
    normalizedZipCode = zipCode;
  }
  return normalizedZipCode;
};
