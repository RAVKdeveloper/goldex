import { FC } from 'react'

import { useTranslation } from 'react-i18next'

import s from '../assets/style.module.css'

interface Props {
  isOpen: boolean
  isBlocked: boolean
  clickToBlocked: () => void
}

export const ModalProjectCardUi: FC<Props> = ({ isBlocked, isOpen, clickToBlocked }) => {
  const { t } = useTranslation()

  return (
    <article className={`${s.modal} ${isOpen && s.open}`}>
      <ul>
        {/* Сдесь должны быть новые иконки */}
        <li className={s.item}>{t('modal.projectCard.key')}</li>
        <li onClick={clickToBlocked} className={`${s.item} ${s.red}`}>
          {isBlocked ? t('modal.projectCard.unblocked') : t('modal.projectCard.blocked')}
        </li>
      </ul>
    </article>
  )
}
