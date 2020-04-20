import i18n, { InitOptions } from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import XHR from 'i18next-xhr-backend'
import { initReactI18next } from 'react-i18next'

const options: InitOptions = {
  fallbackLng: 'en',
  load: 'languageOnly',
  preload: ['en'],

  // have a common namespace used around the full app
  ns: ['general'],
  defaultNS: 'general',

  keySeparator: '##### not used #####', // as we use full text keys in this sample
  saveMissing: false,
  debug: false,

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ',',
    format: (value, format) => {
      if (format === 'uppercase') return value.toUpperCase()
      return value
    },
  },

  react: {
    useSuspense: process.env.NODE_ENV !== 'test',
  },
}

if (process && !process.release) {
  i18n.use(XHR).use(LanguageDetector)
}

// initialize if not already initialized
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init(options)
}

export default i18n
