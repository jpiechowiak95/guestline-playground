import axios, { AxiosInstance } from 'axios';

import { API_URL } from '../constants';

const createAxiosInstance: () => AxiosInstance = () => {
  const baseURL = API_URL;
  const defaultOptions = { baseURL };

  return axios.create(defaultOptions);
};

export const httpClient = createAxiosInstance();