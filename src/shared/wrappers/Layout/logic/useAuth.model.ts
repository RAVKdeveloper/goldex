import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/shared/service/store/hooks/hooks'
import { globalSelector, setAuth } from '@/shared/service/store/slices/global/global.slice'
import { useMeQuery } from '@/shared/service/hooks'

import type { useAuthType } from '../assets/useAuth.type'

export const useAuth = (): useAuthType => {
  const { isAuth } = useAppSelector(globalSelector)
  const dispatch = useAppDispatch()
  const { isSuccess, data } = useMeQuery()

  useEffect(() => {
    if (isSuccess) dispatch(setAuth(true))
    else dispatch(setAuth(false))
  }, [data])

  return {
    isAuth,
  }
}
