import { FC, ReactNode } from 'react'

import { BrowserRouter } from 'react-router-dom'

import { LanguageWrapper } from '../Language/Language.wrapper'
import { RoutesWrapper } from '../../routes/RoutesWrapper.routes'
import { SidebarWidget } from '../../../widgets/Sidebar/Sidebar.widget'

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <BrowserRouter>
      <LanguageWrapper>
        <RoutesWrapper />
        <SidebarWidget />
        {children}
      </LanguageWrapper>
    </BrowserRouter>
  )
}
