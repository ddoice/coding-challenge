import {
  CUSTOMERS_GET_LOADING,
  CUSTOMERS_GET_SUCCESS,
  CUSTOMERS_GET_FAILURE,
  CUSTOMER_GET_LOADING,
  CUSTOMER_GET_SUCCESS,
  CUSTOMER_GET_FAILURE,
  CUSTOMER_ADD_LOADING,
  CUSTOMER_ADD_SUCCESS,
  CUSTOMER_ADD_FAILURE,
  CUSTOMER_UPDATE_LOADING,
  CUSTOMER_UPDATE_SUCCESS,
  CUSTOMER_UPDATE_FAILURE,
  CUSTOMER_DELETE_LOADING,
  CUSTOMER_DELETE_SUCCESS,
  CUSTOMER_DELETE_FAILURE
} from '../constants/actionTypes';


const initialState = {
  data: [],
  loading: false,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {

    case CUSTOMERS_GET_LOADING:
      return {
        ...state,
        loading: true
      };

    case CUSTOMERS_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...action.data]
      };

    case CUSTOMERS_GET_FAILURE:
    case CUSTOMER_GET_FAILURE:
    case CUSTOMER_ADD_FAILURE:
    case CUSTOMER_UPDATE_FAILURE:
    case CUSTOMER_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error.message
      };

    case CUSTOMER_GET_LOADING:
    case CUSTOMER_ADD_LOADING:
    case CUSTOMER_UPDATE_LOADING:
    case CUSTOMER_DELETE_LOADING:
      return {
        ...state,
        loading: true,
        data: state.data
      };

    case CUSTOMER_GET_SUCCESS:
    case CUSTOMER_UPDATE_SUCCESS:
    case CUSTOMER_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: state.data.map(customer =>
          customer.id !== action.id
            ? customer
            : action.data
        )
      };

    case CUSTOMER_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: state.data.filter(customer => customer.id !== action.id)
      };
      
    default:
      return state;
  }
};