import { QueryClient } from '@tanstack/react-query'

const defaultOptions = {
  queries: {
    staleTime: 60 * 1000,
    retry: 1,
  },
}

// Server-side: new instance per request to prevent cross-request data leakage
export function makeQueryClient(): QueryClient {
  return new QueryClient({ defaultOptions })
}

// Client-side: singleton reused across renders
let browserQueryClient: QueryClient | undefined

export function getQueryClient(): QueryClient {
  if (typeof window === 'undefined') {
    return makeQueryClient()
  }
  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient()
  }
  return browserQueryClient
}
