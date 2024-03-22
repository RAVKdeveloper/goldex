import { AppRoutes } from '../../../shared/routes/app.routes'

export const ObjLinksSidebar = {
  Dashboard: '/',
  Balance: '/',
  Account: '/',
  Invoices: AppRoutes.invoicesPage,
  Transactions: AppRoutes.transactionsPage,
  Projects: AppRoutes.projectPage,
  DashboardSucces: AppRoutes.dashboardSuccessPage,
  DashBoardUnSucces: AppRoutes.dashboardUnsuccess,
  DashBoardAppeal: AppRoutes.dashboardAppeal,
  DashboardProcessing: AppRoutes.dashboardProcessing,
  BalanceInfo: AppRoutes.balanceInfo,
  BalanceTransaction: AppRoutes.balanceTransaction,
  AccGeneral: AppRoutes.accGeneral,
  AccAll: AppRoutes.accAll,
}
