import axios from 'axios';
import QueryString from 'qs';
import humps from 'humps';
import { API_URL } from '~/constants/common-values';
import CookiesStorage from './cookie-storage';

export const request = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  },
  paramsSerializer: params =>
    QueryString.stringify(params, { arrayFormat: 'brackets' }),
});

request.interceptors.request.use(
  config => {
    config.params = humps.decamelizeKeys(config.params);
    config.data = humps.decamelizeKeys(config.data);

    const accessToken = CookiesStorage.getAccessToken(); // Get accessToken
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  response => {
    return humps.camelizeKeys(response.data);
  },
  error => {
    const errorResponse = error?.response;
    console.log(errorResponse);
    if (errorResponse.status === STATUS_CODE.UNAUTHORIZED) {
      CookiesStorage.clearSession();
      return Promise.reject(errorResponse?.data);
    }
    return Promise.reject(errorResponse?.data);
  }
);

export const STATUS_CODE = {
  OK: 200,
  NOT_MODIFIED: 304,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOTALLOWED: 405,
  UNPROCESSABLE_ENTITY: 422,
  LOCKED: 423,
  BAD_GATEWAY: 502,
  GATEWAY_TIMEOUT: 504,
  INTERNAL_SERVER_ERROR: 500,
};
