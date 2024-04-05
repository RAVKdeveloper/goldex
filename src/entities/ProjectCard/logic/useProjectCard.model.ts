import { useState } from 'react'

import type { useProjectCardType } from '../assets/useProjectCard.type'

export const useProjectCard = (): useProjectCardType => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isBlocked, setIsBlocked] = useState<boolean>(false)

  const open = () => setIsOpen(!isOpen)

  const blocked = () => setIsBlocked(!isBlocked)

  return {
    isOpen,
    isBlocked,
    open,
    blocked,
  } as const
}
