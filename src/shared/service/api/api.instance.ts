import { QueryClient } from '@tanstack/react-query'
import axios from 'axios'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

export const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL ?? 'http://23.88.40.65:8000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
})
