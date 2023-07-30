import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Reemplaza con la URL de tu backend
});

export default instance;