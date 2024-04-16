import { env } from '@/env';

export function api(path: string, init?: RequestInit){
  
  const baseUrl = env.NEXT_PUBLIC_API_URL
  const url = new URL(baseUrl, path)

  return fetch(url, init)
}