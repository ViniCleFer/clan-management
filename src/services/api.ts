import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.clashofclans.com/v1',
  headers: {
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_COC_KEY}`,
  },
});
