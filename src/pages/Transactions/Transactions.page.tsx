import { FC } from 'react'

import { SidebarWidget } from '../../widgets/Sidebar/Sidebar.widget'

const TransactionsPage: FC = () => {
  return (
    <>
      <SidebarWidget />
      <main>Transactions</main>
    </>
  )
}

export default TransactionsPage
