import { FC } from 'react'

import { Overflow, Modal, ModalHeader } from 'goldex-ui-library'

import { useTranslation } from 'react-i18next'

import { StepOneAddingModal } from './ui/StepOne.ui'
import { StepTwoAddingModal } from './ui/StepTwo.ui'

import { useAddingBalance } from './logic/useAddingBalance.model'

import s from './assets/style.module.css'

export const AddingModalEntity: FC = () => {
  const { t } = useTranslation()
  const { closeModal, isOpenModal, step } = useAddingBalance()

  return (
    <>
      {isOpenModal && <Overflow isTransperant={false} cbClose={closeModal} />}
      <div className={`${s.wrapper} ${!isOpenModal && s.none}`}>
        <Modal data-testid='modal' isOpen={isOpenModal}>
          <div className={s.popup}>
            <ModalHeader title={t('modal.adding.title')} paragraph='' cbClose={closeModal} />
            {step === 1 ? <StepOneAddingModal /> : <StepTwoAddingModal />}
          </div>
        </Modal>
      </div>
    </>
  )
}
