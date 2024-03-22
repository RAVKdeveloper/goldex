import { FC } from 'react'
import { Sidebar, SidebarMobile } from 'goldex-ui-library'

import { ObjLinksSidebar } from './assets/data.mock'

import { useSidebar } from './logic/useSidebar.model'

import s from './assets/style.module.css'

export const SidebarWidget: FC = () => {
  const { open, changeLng, isOpenModal, lng } = useSidebar()

  return (
    <>
      <div className={s.mobile}>
        <SidebarMobile
          avatarUrl='wjiewijrjioe'
          userName='Rayan'
          onOpenSidebar={() => confirm('ed')}
        />
      </div>
      <div className={s.sidebar}>
        <Sidebar
          balanceRub={32335}
          balanceUSDT={324243243}
          user={{ id: 3, url: '/', avatar: 'ewrewr', name: 'Reyli', role: 'Operator' }}
          links={ObjLinksSidebar}
          notifications={{
            Dashboard: 0,
            Balance: 0,
            Invoices: 0,
            Projects: 0,
            Transactions: 0,
            Account: 0,
          }}
          timeRemaining={'Time remaining: 60 ms'}
          isOpenModal={isOpenModal}
          changeLanguage={changeLng}
          activeLng={lng}
          cbAvatar={open}
        />
      </div>
    </>
  )
}
