import { QueryClient } from '@tanstack/react-query'
// import { OpenAPI } from '../client'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

// OpenAPI.BASE = ''
