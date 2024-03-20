import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetextor from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

// eslint-disable-next-line import/no-named-as-default-member
i18next.use(Backend).use(LanguageDetextor).use(initReactI18next).init({
  debug: true,
  fallbackLng: 'ru',
})

export default i18next
