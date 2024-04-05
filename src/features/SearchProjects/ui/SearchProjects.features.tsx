import { FC } from 'react'

import { TextField } from 'goldex-ui-library'
import { useTranslation } from 'react-i18next'

import s from '../assets/style.module.css'

export const SearchProjectsFeatures: FC = () => {
  const { t } = useTranslation()

  return (
    <section className={s.root}>
      <TextField variant='search' placeholder={t('textField.searchPlaceholder')} />
    </section>
  )
}
