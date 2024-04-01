import { FC, ReactNode } from 'react'

import { SidebarWidget } from '@/widgets'

import { LanguageWrapper } from '../Language/Language.wrapper'

import { useAuth } from './logic/useAuth.model'

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { isAuth } = useAuth()

  return (
    <LanguageWrapper>
      {isAuth && <SidebarWidget />}
      {children}
    </LanguageWrapper>
  )
}
