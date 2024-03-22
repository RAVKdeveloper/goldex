import { ProjectsPage, InvoicesPage, TransactionsPage, BalanceInfoPage } from '../../pages'

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
]
