import { FC, Suspense } from 'react'

import { Routes, Route } from 'react-router-dom'

import { useAuth } from '@/shared/wrappers/Layout/logic/useAuth.model'

import { PagesRoutesWithComponents, PagesRoutesNoAuth } from './model.routes'

export const RoutesWrapper: FC = () => {
  const { isAuth } = useAuth()

  return (
    <>
      <Suspense fallback='Loading...'>
        <Routes>
          {isAuth
            ? PagesRoutesWithComponents.map(({ id, route, Page }) => (
                <Route key={id} path={route} Component={Page} />
              ))
            : PagesRoutesNoAuth.map(({ id, route, Page }) => (
                <Route key={id} path={route} Component={Page} />
              ))}
        </Routes>
      </Suspense>
    </>
  )
}
