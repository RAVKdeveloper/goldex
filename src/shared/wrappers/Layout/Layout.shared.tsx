import { FC, ReactNode } from 'react'

import { SidebarWidget } from '../../../widgets/Sidebar/Sidebar.widget'

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <SidebarWidget />
      {children}
    </>
  )
}
