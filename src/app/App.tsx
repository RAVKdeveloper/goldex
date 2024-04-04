/* eslint-disable react-refresh/only-export-components */
import { FC } from 'react'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider } from 'react-redux'
import { withErrorBoundary } from 'react-error-boundary'

import { queryClient } from '@/shared/service/api/api.instance'
import { store } from '@/shared/service/store/store'
import { Layout } from '@/shared/wrappers/Layout/Layout.shared'
import { RoutesWrapper } from './routes/RoutesWrapper.routes'

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Layout>
          <RoutesWrapper />
        </Layout>
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default withErrorBoundary(App, {
  fallback: <div>Произошла ошибка</div>,
})
