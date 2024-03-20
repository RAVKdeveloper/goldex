import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.SERVER_HOST }),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints: _builder => ({}),
})
