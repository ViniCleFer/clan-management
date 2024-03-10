import { api } from '@/services/api';

export function getClansMembersByClanTagRequest(tag: string) {
  return api.get(`clans/${tag}/members`);
}
