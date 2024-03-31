import { FC } from 'react'

import { QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'

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
    </QueryClientProvider>
  )
}

export default App
