import axios, { AxiosPromise } from 'axios';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
}

const BASE_URL = 'http://localhost:4000';

const io = axios.create({
  baseURL: BASE_URL
})

export const getUsers = (id: number): AxiosPromise => {
  return io.get(`/users/${id}`);
}

export const addUser = (firstName: string, lastName: string): AxiosPromise => {
  return io.post('/users', { firstName, lastName });
}