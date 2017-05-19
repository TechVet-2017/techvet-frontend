import $ from 'jquery';
import { change } from 'redux-form';

const fillAddressFields = (address, dispatch) => {
  dispatch(
    change(
      'record-form',
      'publicPlace',
      `${address.tipoDeLogradouro} ${address.logradouro}`,
    ),
  );
  dispatch(
    change(
      'record-form',
      'neighborhood',
      address.bairro,
    ),
  );
  dispatch(
    change(
      'record-form',
      'city',
      address.cidade,
    ),
  );
  dispatch(
    change(
      'record-form',
      'district',
      address.estado,
    ),
  );
  dispatch(
    change(
      'record-form',
      'addressNumber',
      '',
    ),
  );
  dispatch(
    change(
      'record-form',
      'complement',
      '',
    ),
  );
};

export const AsyncValidate = (values, dispatch) => {
  const zipCode = values.zipCode.replace(/[^\d]/, '');
  return $.ajax({
    url: `http://correiosapi.apphb.com/cep/${zipCode}`,
    dataType: 'jsonp',
    crossDomain: true,
    contentType: 'application/json',
  }).then(
    (response) => {
      fillAddressFields(response, dispatch);
    },
    (f) => {
      const error = { zipCode: 'CEP não encontrado' };
      throw error;
    },
  );
};
