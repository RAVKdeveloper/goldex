import * as yup from 'yup'

import { useTranslation } from 'react-i18next'

export const useSchemaResetPasswordForm = () => {
  const { t } = useTranslation()

  const schema = yup.object().shape({
    currentPassword: yup
      .string()
      .required(t('validateErrors.empty'))
      .min(4, t('validateErrors.min', { min: 4 }))
      .max(50, t('validateErrors.max', { max: 50 })),
    newPassword: yup
      .string()
      .required(t('validateErrors.empty'))
      .min(4, t('validateErrors.min', { min: 4 }))
      .max(50, t('validateErrors.max', { max: 50 })),
    confirmCurrentPassword: yup
      .string()
      .required(t('validateErrors.empty'))
      .min(4, t('validateErrors.min', { min: 4 }))
      .max(50, t('validateErrors.max', { max: 50 }))
      .oneOf([yup.ref('newPassword')], t('validateErrors.passwordConfirmationError')),
  })

  return schema
}
