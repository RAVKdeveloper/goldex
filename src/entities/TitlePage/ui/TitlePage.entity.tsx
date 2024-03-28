import { FC } from 'react'

import s from '../assets/style.module.css'

import type { TitlePageType } from '../assets/TitlePage.type'

export const TitlePage: FC<TitlePageType> = ({ title, subtitle }) => {
  return (
    <div data-testid='titlapage' className={s.root}>
      <h1 className={s.title}>{title}</h1>
      <p className={s.subtitle}>{subtitle}</p>
    </div>
  )
}
