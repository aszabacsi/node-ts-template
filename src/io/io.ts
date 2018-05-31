import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'http://localhost:4000';

const io: AxiosInstance = axios.create({
  baseURL: BASE_URL
})

export default io;