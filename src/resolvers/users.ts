import axios, { AxiosPromise } from 'axios';

export type Role = 'Admin' | 'Basic' | 'Premium';

export interface User {
  username: string,
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

export interface RegisteredUser extends User {
  id: string;
}

const BASE_URL = 'http://localhost:4000/users';

const io = axios.create({
  baseURL: BASE_URL,
});

export const getUser = (id: number): AxiosPromise<void> => {
  return io.get('/user', {
    params: { id }
  });
};

export const addUser = (user: User): AxiosPromise<void> => {
  return io.post('/user', user);
};

export const deleteUser = (id: number): AxiosPromise<any> => {
  return io.delete('/user', { 
    params: {
      id
    }
  });
};

export const modifyUser = (user: RegisteredUser): AxiosPromise<void> => {
  return io.patch('/user', user);
};
