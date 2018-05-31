import { AxiosPromise } from 'axios';
import { io } from '../io';


export interface Company {
  id: number;
  name: string;
  country: string;
}

export const getCompany = (id: number): AxiosPromise<Company> => {
  return io.get(`/companies/${id}`);
}