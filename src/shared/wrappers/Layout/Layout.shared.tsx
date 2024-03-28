import { FC, ReactNode } from 'react'

import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'

import { LanguageWrapper } from '../Language/Language.wrapper'
import { RoutesWrapper } from '../../routes/RoutesWrapper.routes'
import { queryClient } from '../../service/api/api.instance'

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <LanguageWrapper>
          <RoutesWrapper />
          {children}
        </LanguageWrapper>
      </QueryClientProvider>
    </BrowserRouter>
  )
}
