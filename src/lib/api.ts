import { getIdToken } from './authClient';

// For React Native CLI, configure your API URL here
// You can use react-native-config for environment-specific configurations
const API_URL = 'http://localhost:8080';

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
