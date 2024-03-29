import { FC, ReactNode } from 'react'

import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'

import { LanguageWrapper } from '../Language/Language.wrapper'
import { RoutesWrapper } from '../../routes/RoutesWrapper.routes'
import { queryClient } from '../../service/api/api.instance'
import { store } from '../../service/store/store'

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <LanguageWrapper>
            <RoutesWrapper />
            {children}
          </LanguageWrapper>
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}
