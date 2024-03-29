import { useEffect, useState } from 'react'

import i18next, { changeLanguage } from 'i18next'

import type { useSidebarType } from '../assets/useSidebar.type'

export const useSidebar = (): useSidebarType => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [lng, setLng] = useState<string>('en')
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)
  const { language } = i18next

  const open = () => setOpenModal(!openModal)

  const changeLng = (lng: string) => {
    changeLanguage(lng)
    setOpenModal(false)
  }

  const openSidebar = () => setIsOpenSidebar(!isOpenSidebar)

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
  }
}
