import { FC } from 'react'
import { Button, TextField } from 'goldex-ui-library'
import { EyeIcon } from 'goldex-icon-library'

import s from '../assets/style.module.css'

export const LoginFormEntity: FC = () => {
  return (
    <form className={s.form}>
      <div className={s.header}>
        <h1 className={s.title}>Вход</h1>
        <p className={s.supportingText}>Для продолжения войдите в свою учетную запись</p>
      </div>
      <div className={s.content}>
        <TextField variant='input' label='Логин' />
        <TextField
          type='password'
          variant='input'
          label='Пароль'
          icon={<EyeIcon color='#FFFFFF' opacity={0.4} width={20} height={20} />}
        />
      </div>
      <Button variant='primary' size='full' disabled>
        Войти
      </Button>
    </form>
  )
}
