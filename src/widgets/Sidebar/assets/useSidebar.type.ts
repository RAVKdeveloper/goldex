export interface useSidebarType {
  open: () => void
  changeLng: (lng: string) => void
  isOpenModal: boolean
  lng: string
  isOpenSidebar: boolean
  openSidebar: () => void
  balances: { RUB: number; USDT: number }
}
