import { FC } from 'react'

import { SidebarWidget } from '../../widgets/Sidebar/Sidebar.widget'

export const TransactionsPage: FC = () => {
  return (
    <>
      <SidebarWidget />
      <main>Transactions</main>
    </>
  )
}
