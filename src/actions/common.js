/**
 * Action ejecutada al inicio de un fetch
 * @param {string} type Type
 * @returns {object} Action
 */
const isFetching = ({ type }) => ({ type: `${type}_LOADING` });

/**
 * Action ejecutada cuando se realiza un fetch correctamente
 * @param {string} type Type
 * @param {*} response Respuesta
 * @returns {object} Action
 */
const isSuccess = (args) => {
  const { type, ...rest } = args;
  return ({
    type: `${type}_SUCCESS`,
    ...rest
  });
}

/**
 * Action ejecutada al realizar un fetch fallido
 * @param {string} type Type
 * @param {*} error Mensaje de error
 * @returns {object} Action
 */
const isError = (args) => {
  const { type, ...rest } = args;
  return ({
    type: `${type}_ERROR`,
    ...rest
  });
}

/**
 * Wrapper de fetch que inyecta los headers necesarios y devuelve el json
 * @param {string} url 
 * @param {object} options 
 */
const fetcher = (url, options = {}) => fetch(url, {
  ...options,
  headers: {
    'Content-Type': 'application/json'
  }
}).then(res => res.json());


export {
  isFetching,
  isSuccess,
  isError,
  fetcher
}