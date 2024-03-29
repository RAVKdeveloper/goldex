import { FC } from 'react'

import { Modal, ModalHeader } from 'goldex-ui-library'

import { useTranslation } from 'react-i18next'

import { useMoreInfoModal } from '../logic/useMoreInfoModal.model'

import s from '../assets/style.module.css'

export const MoreInfoInvoicesEntity: FC = () => {
  const { t } = useTranslation()
  const { closeModal, isOpenModal, info } = useMoreInfoModal()

  return (
    <div className={`${s.wrapper} ${!isOpenModal && s.none}`}>
      <Modal isOpen={isOpenModal} data-testid='modal'>
        <div className={s.container}>
          <ModalHeader title={t('modal.invoices')} paragraph='' cbClose={closeModal} />
          <div className={s.content}>
            {info.map(({ key, value }, i) => (
              <p key={i} className={s.row}>
                <span className={s.key}>{key}</span>
                <span className={s.value}>{value}</span>
              </p>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  )
}
