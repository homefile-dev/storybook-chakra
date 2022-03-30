import '@fontsource/assistant'
import '@fontsource/poppins'
import { extendTheme } from '@chakra-ui/react'
import Button from './components/ButtonStyles'
import Container from './components/ContainerStyles'
import Text from './components/TextStyles'
import Input from './components/InputStyles'

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'container.primary',
        fontFamily: 'primary',
      },
      a: {
        color: 'font.link',
        fontFamily: 'secondary',
        textDecoration: 'none',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
  components: {
    Button,
    Container,
    Text,
    Input,
  },
  colors: {
    brand: {
      primary: '#6AB528',
      secondary: '#3F5D25',
    },
    font: {
      primary: '#464646',
      secondary: '#818181',
      link: '#2488C6',
      linkHover: '#1D7AB4',
    },
    container: {
      primary: '#DCE8EC',
      secondary: '#F0F8F0',
      tertiary: '#F4F7F8',
    },
    button: {
      primary: '#2488C6',
      primaryHover: '#1D7AB4',
      secondary: '#F0F8F0',
      secondaryHover: '#DFEFF8',
      tertiaryHover: '#CBF0BD',
      icon: '#BCD1D8',
    },
    input: {
      border: '#BCD1D8',
      borderHover: '#3E9FDB',
      borderFocus: '#1D7AB4',
    },
  },
  fonts: {
    primary: 'Poppins',
    secondary: 'Assistant',
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  space: {
    container: {
      sm: '1rem',
      md: '2rem',
      lg: '3rem',
    },
  },
  sizes: {
    button: {
      max: 'max-content',
      min: 'min-content',
      xs: '3.4rem',
      sm: '10rem',
      md: '20rem',
      lg: '28rem',
      full: '100%',
    },
    container: {
      xxs: '6rem',
      xs: '10rem',
      sm: '20rem',
      md: '30rem',
      lg: '40rem',
      xl: '50rem',
      full: '100%',
      footer: '32rem',
    },
    image: {
      logo: '2rem',
    },
    input: {
      sm: '2rem',
      md: '3rem',
      lg: '4rem',
      xl: '5rem',
      wMd: '22rem',
    },
  },
})

export default theme
