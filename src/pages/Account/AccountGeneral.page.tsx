import { FC } from 'react'

import { useTranslation } from 'react-i18next'

import { ProfileFormEntity, ResetPasswordFormEntity, TitlePage } from '@/entities'

import s from './style.module.css'

export const AccountGeneralPage: FC = () => {
  const { t } = useTranslation()

  return (
    <main>
      <div className={s.container}>
        <TitlePage title={t('title.accGeneral')} subtitle={t('subtitle.accGeneral')} />
        <div className={s.content}>
          <ProfileFormEntity />
          <ResetPasswordFormEntity />
        </div>
      </div>
    </main>
  )
}
