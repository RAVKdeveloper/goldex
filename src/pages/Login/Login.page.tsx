import { FC } from 'react'

import { LoginFormEntity } from '@/entities'

import s from './style.module.css'

export const LoginPage: FC = () => {
  return (
    <main className={s.root}>
      <LoginFormEntity />
    </main>
  )
}
