import * as yup from 'yup'
import { useTranslation } from 'react-i18next'

export const useSchemaLoginValidate = () => {
  const { t } = useTranslation()

  const schema = yup.object().shape({
    login: yup
      .string()
      .required(t('validateErrors.empty'))
      .min(5, t('validateErrors.min', { min: 5 }))
      .max(50, t('validateErrors.max', { max: 50 })),
    password: yup
      .string()
      .required(t('validateErrors.empty'))
      .min(6, t('validateErrors.min', { min: 6 }))
      .max(70, t('validateErrors.max', { max: 70 })),
  })

  return schema
}
