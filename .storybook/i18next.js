import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import translateEN from '../src/assets/locales/en'
import translatePT from '../src/assets/locales/pt'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: translateEN,
      },
      pt: {
        translation: translatePT,
      },
    },
  })

export { i18n }
