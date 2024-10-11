import axios from 'axios';

const API_BASE_URL = 'https://my-json-server.typicode.com/ndunk28/api-catalog';

export const fetchProductsApi = () => axios.get(`${API_BASE_URL}/products`);

export const fetchProductByIdApi = (id) => axios.get(`${API_BASE_URL}/products/${id}`);