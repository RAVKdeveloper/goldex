import { FC } from 'react'

import { LoginFormEntity } from '@/entities'

import s from './style.module.css'

const LoginPage: FC = () => {
  return (
    <main className={s.root}>
      <LoginFormEntity />
    </main>
  )
}

export default LoginPage
