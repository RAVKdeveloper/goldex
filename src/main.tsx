import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'

import App from './App.tsx'
import './input.css'
import './shared/i18n/i18n.service.ts'

import { queryClient } from './shared/service/api/api.instance'
import { RoutesWrapper } from './shared/routes/RoutesWrapper.routes'
import { LanguageWrapper } from './shared/wrappers/Language/Language.wrapper'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <LanguageWrapper>
          <RoutesWrapper />
          <App />
        </LanguageWrapper>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
