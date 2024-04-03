import * as yup from 'yup'

import { useTranslation } from 'react-i18next'

export const useSchemaProfileForm = () => {
  const { t } = useTranslation()

  const schema = yup.object().shape({
    username: yup
      .string()
      .required(t('validateErrors.empty'))
      .min(4, t('validateErrors.min', { min: 4 }))
      .max(50, t('validateErrors.max', { max: 50 })),
  })

  return schema
}
