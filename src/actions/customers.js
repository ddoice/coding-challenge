import {
  isFetching,
  isSuccess,
  isError,
  fetcher
} from './common.js';

import { CUSTOMERS_GET, CUSTOMER_GET, CUSTOMER_ADD, CUSTOMER_UPDATE, CUSTOMER_DELETE } from '../constants/urls';

export const getCustomers = () => async (dispatch) => {
  const type = 'CUSTOMERS_GET';
  dispatch(isFetching({ type }));
  try {
    const { data } = await fetcher(CUSTOMERS_GET);
    dispatch(isSuccess({ type, data }));
  } catch (error) {
    console.log('error:', error)
    dispatch(isError({ type, error }));
  }
};

export const getCustomer = (id) => async (dispatch) => {
  const type = 'CUSTOMER_GET';
  dispatch(isFetching({ type }));
  try {
    const { data } = await fetcher(CUSTOMER_GET + `/${id}`);
    dispatch(isSuccess({ type, data, id }));
  } catch (error) {
    console.log('error:', error)
    dispatch(isError({ type, error }));
  }
};

export const addCustomer = (body) => async (dispatch) => {
  const type = 'CUSTOMER_ADD';
  dispatch(isFetching({ type }));
  try {
    const { data } = await fetcher(CUSTOMER_ADD, {
      method: 'POST',
      body: JSON.stringify(body)
    });
    return dispatch(isSuccess({ type, data, body, id: data.id }));
  } catch (error) {
    console.log('error:', error)
    return dispatch(isError({ type, error }));
  }
};

export const updateCustomer = (id, body) => async (dispatch) => {
  const type = 'CUSTOMER_UPDATE';
  dispatch(isFetching({ type }));
  try {
    const { data } = await fetcher(CUSTOMER_UPDATE + `/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body)
    });
    dispatch(isSuccess({ type, data, body, id }));
  } catch (error) {
    console.log('error:', error)
    dispatch(isError({ type, error }));
  }
};

export const deleteCustomer = (id) => async (dispatch) => {
  const type = 'CUSTOMER_DELETE';
  dispatch(isFetching({ type }));
  try {
    const { data } = await fetcher(CUSTOMER_DELETE + `/${id}`,{
      method: 'DELETE',
    });
    dispatch(isSuccess({ type, data, id }));
  } catch (error) {
    console.log('error:', error)
    dispatch(isError({ type, error }));
  }
};
