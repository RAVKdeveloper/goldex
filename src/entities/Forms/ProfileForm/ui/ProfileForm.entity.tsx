import { FC } from 'react'
import { Button, TextField, UploadAvatar } from 'goldex-ui-library'

import s from '../assets/style.module.css'

export const ProfileFormEntity: FC = () => {
  return (
    <form className={s.form}>
      <div className={s.header}>
        <h2 className={s.title}>Ваш профиль</h2>
        <p className={s.supportingText}>Настройте отображение вашего профиля</p>
      </div>
      <div className={s.content}>
        <UploadAvatar size='lg' />
        <TextField label='Имя пользователя' sizeType='lg' />
      </div>
      <div className={s.button}>
        <Button variant='primary' size='es' disabled>
          Сохранить
        </Button>
      </div>
    </form>
  )
}
