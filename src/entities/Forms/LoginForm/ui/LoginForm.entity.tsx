import { FC } from 'react'
import { Button, TextField } from 'goldex-ui-library'
import { EyeIcon } from 'goldex-icon-library'

import { useTranslation } from 'react-i18next'

import s from '../assets/style.module.css'

export const LoginFormEntity: FC = () => {
  const { t } = useTranslation()

  return (
    <form className={s.form}>
      <div className={s.header}>
        <h1 className={s.title}>{t('loginTitle')}</h1>
        <p className={s.supportingText}>{t('loginSupText')}</p>
      </div>
      <div className={s.content}>
        <TextField variant='input' label={t('login')} />
        <TextField
          type='password'
          variant='input'
          label={t('password')}
          icon={<EyeIcon color='#FFFFFF' opacity={0.4} width={20} height={20} />}
        />
      </div>
      <Button variant='primary' size='full' disabled>
        Войти
      </Button>
    </form>
  )
}
