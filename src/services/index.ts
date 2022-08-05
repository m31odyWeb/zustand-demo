import axios from 'axios';
import { IPost } from '../@types/entities';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const { get } = axios.create({
  baseURL: BASE_URL,
});

export const getPosts = async () => {
  const url = '/posts';

  try {
    const { data } = await get<IPost[]>(url);
    return data;
  } catch (error: any) {
    const { data, status } = error;
    throw { message: data.message, status };
  }
};
