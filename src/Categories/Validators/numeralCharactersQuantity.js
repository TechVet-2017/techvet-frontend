export const numeralCharactersQuantity = quantity => value =>
  (value && value.replace(/[^\d]/g, '').length !== quantity ? `Deve conter ${quantity} dígitos` : undefined);
