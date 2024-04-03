import { FC } from 'react'
import { Button, TextField } from 'goldex-ui-library'

import s from '../assets/style.module.css'

export const ResetPasswordFormEntity: FC = () => {
  return (
    <form className={s.form}>
      <div className={s.header}>
        <h2 className={s.title}>Безопасность</h2>
        <p className={s.supportingText}>Обновите свой пароль</p>
      </div>
      <div className={s.content}>
        <TextField label='Текущий пароль' sizeType='lg' />
        <TextField label='Новый пароль' sizeType='lg' />
        <TextField label='Подтвердите новый пароль' sizeType='lg' />
      </div>
      <div className={s.button}>
        <Button variant='primary' size='es' disabled>
          Сохранить
        </Button>
      </div>
    </form>
  )
}
