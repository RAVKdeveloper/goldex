import { FC } from 'react'
import { Button, TextField } from 'goldex-ui-library'
import { EyeIcon, EyeOffIcon } from 'goldex-icon-library'

import { Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { useLoginForm } from '../logic/useLoginForm.model'

import s from '../assets/style.module.css'

export const LoginFormEntity: FC = () => {
  const { t } = useTranslation()
  const { handleSubmit, submit, isValid, errorFields, control, isOpenPass, checkPassword } =
    useLoginForm()

  return (
    <form onSubmit={handleSubmit(submit)} className={s.form} data-testid='loginForm'>
      <div className={s.header}>
        <h1 className={s.title}>{t('loginTitle')}</h1>
        <p className={s.supportingText}>{t('loginSupText')}</p>
      </div>
      <div className={s.content}>
        <Controller
          name='username'
          control={control}
          render={({ field }) => {
            return (
              <TextField
                variant='input'
                label={t('login')}
                isError={errorFields.login ? true : false}
                helpText={errorFields.login}
                {...field}
                data-testid='login'
              />
            )
          }}
        />
        <Controller
          name='password'
          control={control}
          render={({ field }) => {
            return (
              <TextField
                type={isOpenPass ? 'text' : 'password'}
                variant='input'
                label={t('password')}
                icon={
                  <div onClick={checkPassword}>
                    {isOpenPass ? (
                      <EyeIcon color='#FFFFFF' opacity={0.4} width={20} height={20} />
                    ) : (
                      <EyeOffIcon color='#FFFFFF' opacity={0.4} width={20} height={20} />
                    )}
                  </div>
                }
                isError={errorFields.password ? true : false}
                helpText={errorFields.password}
                {...field}
                data-testid='password'
              />
            )
          }}
        />
      </div>
      <Button variant='primary' size='full' disabled={!isValid}>
        Войти
      </Button>
    </form>
  )
}
