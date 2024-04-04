import { FC, useEffect } from 'react'

import { useNavigate, useLocation } from 'react-router-dom'

import { useAuth } from '@/shared/wrappers/Layout/logic/useAuth.model'

import { AppRoutes } from '@/app/routes/app.routes'

const NotFoundPage: FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { isAuth } = useAuth()

  useEffect(() => {
    isAuth ? navigate(AppRoutes.balanceInfo) : navigate(AppRoutes.login)
  }, [isAuth, navigate, pathname])

  return <>Not Found</>
}

export default NotFoundPage
