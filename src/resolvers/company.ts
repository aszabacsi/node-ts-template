import axios, { AxiosPromise } from 'axios';

const BASE_URL = 'http://localhost:4000';

const io = axios.create({
  baseURL: BASE_URL,
});

export interface Company {
  id: number;
  name: string;
  country: string;
}

export const getCompany = (id: number): AxiosPromise<Company> => {
  return io.get(`/companies/${id}`);
}