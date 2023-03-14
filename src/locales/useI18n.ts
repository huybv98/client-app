import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import en from './language/en'
import vi from './language/vi'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en,
      },
      vi: {
        translation: vi,
      },
    },
    lng: 'vi',
    fallbackLng: 'vi',

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
