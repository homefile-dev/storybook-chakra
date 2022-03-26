import theme from "../src/theme/theme.ts"

export const parameters = {
  chakra: {
      theme
    },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}