import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './shared/i18n/i18n.service.ts'

import { LanguageWrapper } from './shared/wrappers/Language/Language.wrapper.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageWrapper>
      <App />
    </LanguageWrapper>
  </React.StrictMode>,
)
