const {
  REACT_APP_API_PARTIAL_URL,
  REACT_APP_API_PORT,
  REACT_APP_API_PREFIX
} = process.env;

export default `${REACT_APP_API_PARTIAL_URL}:${REACT_APP_API_PORT}${REACT_APP_API_PREFIX}`;

