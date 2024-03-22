import { useState } from 'react'

import { changeLanguage } from 'i18next'

import type { useSidebarType } from '../assets/useSidebar.type'

export const useSidebar = (): useSidebarType => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [lng, setLng] = useState<string>('en')
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)

  const open = () => setOpenModal(!openModal)

  const changeLng = (lng: string) => {
    changeLanguage(lng)
    setLng(lng)
    setOpenModal(false)
  }

  const openSidebar = () => setIsOpenSidebar(!isOpenSidebar)

  return {
    open,
    changeLng,
    isOpenModal: openModal,
    lng,
    isOpenSidebar,
    openSidebar,
  }
}
