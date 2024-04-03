import {
  ProjectsPage,
  InvoicesPage,
  TransactionsPage,
  BalanceInfoPage,
  LoginPage,
  NotFoundPage,
  AccountGeneralPage,
} from '@/pages'

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
