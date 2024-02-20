import axios, { Axios } from "axios";

const jwt = localStorage.getItem("authKey");

export const axiosAuth: Axios = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 10000,
});

export const axiosApi: Axios = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 10000,
  headers: {
    Authorization: `${jwt}`,
  },
});
