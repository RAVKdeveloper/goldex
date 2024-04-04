import { useEffect, useState, useMemo } from 'react'

import i18next, { changeLanguage } from 'i18next'

import { useBalanceInfoQuery } from '@/shared/service/hooks'

import type { useSidebarType } from '../assets/useSidebar.type'

export const useSidebar = (): useSidebarType => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [lng, setLng] = useState<string>('en')
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)
  const { language } = i18next
  const { data } = useBalanceInfoQuery()

  const open = () => setOpenModal(!openModal)

  const changeLng = (lng: string) => {
    changeLanguage(lng)
    setOpenModal(false)
  }

  const openSidebar = () => setIsOpenSidebar(!isOpenSidebar)

  const balances = useMemo(() => {
    if (data && data.data) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const obj: { RUB: number; USDT: number } = Object.fromEntries(
        data.data.map(({ exchange, balance }) => [exchange, balance]),
      )

      return obj
    }

    return { RUB: 0, USDT: 0 }
  }, [data])

  useEffect(() => {
    setLng(i18next.language)
  }, [language])

  return {
    open,
    changeLng,
    isOpenModal: openModal,
    lng,
    isOpenSidebar,
    openSidebar,
    balances,
  }
}
