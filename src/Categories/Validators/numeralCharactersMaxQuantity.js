export const numeralCharactersMaxQuantity = max => value =>
  (value && value.replace(/[^\d]/g, '').length > max ? `Deve conter no máximo ${max} dígitos` : undefined);
