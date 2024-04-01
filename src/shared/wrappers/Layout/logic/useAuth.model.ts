import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/shared/service/store/hooks/hooks'
import { globalSelector, setAuth } from '@/shared/service/store/slices/global/global.slice'

import type { useAuthType } from '../assets/useAuth.type'

export const useAuth = (): useAuthType => {
  const { isAuth } = useAppSelector(globalSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setAuth(true))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    isAuth,
  }
}
