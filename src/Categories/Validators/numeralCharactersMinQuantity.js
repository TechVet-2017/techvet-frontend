export const numeralCharactersMinQuantity = min => value =>
  (value && value.replace(/[^\d]/g, '').length < min ? `Deve conter no mínimo ${min} dígitos` : undefined);
