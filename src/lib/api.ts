import Constants from 'expo-constants';
import { getIdToken } from './authClient';

const API_URL = (Constants.expoConfig?.extra as any)?.API_URL ?? 'http://localhost:8080';

export async function api(path: string, init: RequestInit = {}) {
  const token = await getIdToken();
  const res = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init.headers || {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `HTTP ${res.status}`);
  }
  const contentType = res.headers.get('content-type') || '';
  return contentType.includes('application/json') ? res.json() : res.text();
}
