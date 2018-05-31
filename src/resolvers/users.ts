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

export const getUser = (id: number): AxiosPromise => {
  return io.get(`/users/${id}`);
}

export const addUser = (firstName: string, lastName: string): AxiosPromise => {
  return io.post('/users', { firstName, lastName });
}

export const deleteUser = (id: number): AxiosPromise => {
  return io.delete(`/users/${id}`);
}

export const modifyUser = (id: number, firstName: string, lastName: string): AxiosPromise => {
  return io.patch(`/users/${id}`, { firstName, lastName });
}