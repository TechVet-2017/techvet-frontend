export const required = value => (value ? undefined : 'Campo obrigatório');

export const numeralCharactersQuantity = quantity => value =>
  (value && value.replace(/[^\d]/g, '').length !== quantity ? `Deve conter ${quantity} dígitos` : undefined);

export const numeralCharactersMaxQuantity = max => value =>
  (value && value.replace(/[^\d]/g, '').length > max ? `Deve conter no máximo ${max} dígitos` : undefined);

export const numeralCharactersMinQuantity = min => value =>
  (value && value.replace(/[^\d]/g, '').length < min ? `Deve conter no mínimo ${min} dígitos` : undefined);