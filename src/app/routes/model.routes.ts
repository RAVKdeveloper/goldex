import { lazy } from 'react'

const ProjectsPage = lazy(() => import('@/pages/Projects/Projects.page'))
const BalanceInfoPage = lazy(() => import('@/pages/Balance/Info/BalanceInfo.page'))
const InvoicesPage = lazy(() => import('@/pages/Invoises/Invoises.page'))
const TransactionsPage = lazy(() => import('@/pages/Transactions/Transactions.page'))
const LoginPage = lazy(() => import('@/pages/Login/Login.page'))
const NotFoundPage = lazy(() => import('@/pages/NotFound/NotFound.page'))
const AccountGeneralPage = lazy(() => import('@/pages/Account/AccountGeneral.page'))

import { AppRoutes } from './app.routes'

export const PagesRoutesWithComponents = [
  {
    id: 1,
    route: AppRoutes.projectPage,
    Page: ProjectsPage,
  },
  {
    id: 2,
    route: AppRoutes.invoicesPage,
    Page: InvoicesPage,
  },
  {
    id: 3,
    route: AppRoutes.transactionsPage,
    Page: TransactionsPage,
  },
  {
    id: 4,
    route: AppRoutes.balanceInfo,
    Page: BalanceInfoPage,
  },
  {
    id: 5,
    route: AppRoutes.accGeneral,
    Page: AccountGeneralPage,
  },
  {
    id: 6,
    route: '*',
    Page: NotFoundPage,
  },
]

export const PagesRoutesNoAuth = [
  {
    id: 401,
    route: AppRoutes.login,
    Page: LoginPage,
  },
  {
    id: 404,
    route: '*',
    Page: NotFoundPage,
  },
]
