import { FC } from 'react'

import { Routes, Route } from 'react-router-dom'

import { PagesRoutesWithComponents } from './model.routes'

export const RoutesWrapper: FC = () => {
  return (
    <>
      <Routes>
        {PagesRoutesWithComponents.map(({ id, route, Page }) => (
          <Route key={id} path={route} Component={Page} />
        ))}
      </Routes>
    </>
  )
}
