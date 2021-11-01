import axios from 'axios';
import baseApi from './baseApi';
import authHeaders from './authHeaders';

export const sendRequestWithData = async (method, path, data) => {
  const result = await axios[method](`${baseApi}/${path}`, data, authHeaders());
  return result;
};

export const sendRequestWithoutData = async (method, path) => {
  const result = await axios[method](`${baseApi}/${path}`, authHeaders());
  return result;
};
