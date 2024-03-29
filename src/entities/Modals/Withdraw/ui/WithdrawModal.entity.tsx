import { FC } from 'react'

import { Overflow, Modal, ModalHeader, TextField, ModalActions } from 'goldex-ui-library'

import { useTranslation } from 'react-i18next'

import { Controller } from 'react-hook-form'
import { useWithdrawModal } from '../logic/useWithdrawModal.model'

import s from '../assets/style.module.css'

export const WithdrawModalEntity: FC = () => {
  const { t } = useTranslation()
  const { isOpen, closeModal, control, handleSubmit, submit, errorFields } = useWithdrawModal()

  return (
    <>
      {isOpen && <Overflow isTransperant={false} cbClose={closeModal} />}
      <div className={`${s.wrapper} ${!isOpen && s.none}`}>
        <Modal data-testid='modal' isOpen={isOpen}>
          <div className={s.popup}>
            <ModalHeader title={t('modal.withdraw')} paragraph='' cbClose={closeModal} />
            <form onSubmit={handleSubmit(submit)} className={s.form}>
              <Controller
                control={control}
                name='amount'
                render={({ field }) => {
                  return (
                    <TextField
                      label={t('labels.amount')}
                      {...field}
                      isError={errorFields.amount ? true : false}
                      helpText={errorFields.amount}
                      data-testid='amount'
                    />
                  )
                }}
              />
              <Controller
                control={control}
                name='address'
                render={({ field }) => {
                  return (
                    <TextField
                      label={t('labels.address')}
                      {...field}
                      isError={errorFields.address ? true : false}
                      helpText={errorFields.address}
                      data-testid='address'
                    />
                  )
                }}
              />
              <ModalActions
                btnTextAction={t('btn.withdraw')}
                btnTextCancel={t('btn.cansel')}
                cbAction={() => {}}
                cbCansel={closeModal}
              />
            </form>
          </div>
        </Modal>
      </div>
    </>
  )
}
