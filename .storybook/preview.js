import theme from "../src/theme"
import { i18n } from './i18next.js'

export const parameters = {
  i18n,
  locale: 'en',
  locales: {
    en: 'English',
    pt: 'Português',
  },
  chakra: {
    theme,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}